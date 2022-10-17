import {DataState, useAction, useApi} from "../api/api-hook";
import {add_contact, get_contacts} from "../api/contact";
import {
    get_messages_from_contact,
    Message,
    send_message_to_contact,
    subscribe_to_messages,
    TextMessageValue
} from "../api/message";
import {createContext, FC, ReactNode, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {useUsername} from "./auth";

export function useContacts() {
    return useApi('contacts', get_contacts)
}

export function useAddContact(username: string) {
    return useAction(() => add_contact(username), [username])
}

function useMessagesFromContact(contact: string) {
    return useApi(`messages.${contact}`,async () => {
        let lastMessageArray : Message[]
        const messages : Message[] = []
        let page = 0
        do {
            lastMessageArray = await get_messages_from_contact(contact, page++)
            messages.push(...lastMessageArray)
        } while(lastMessageArray.length !== 0)
        return messages
    })
}

export function useSendMessageToContact(contact: string, message: TextMessageValue) {
    return useAction(() => send_message_to_contact(contact, message), [contact, message])
}

export function useMessageSubscription() {
    const username = useUsername()
    return useMemo(subscribe_to_messages, [username])

}

export function useMessageListener(source : EventSource, callback: (message: Message) => void) {
    const cb = useCallback<EventListener>(value => {
        callback((value as any).data as Message)
    }, [callback])

    useEffect(() => {
        source.addEventListener('message', cb)
        return () => {
            source.removeEventListener('message', cb)
        }
    }, [source])
}

interface MessageContext {
    messages: Message[],
    selectedContact: string,
    setSelectedContact: (contact: string) => void
}

const messageContext = createContext<MessageContext>({
    messages:[],
    selectedContact: "",
    setSelectedContact: () => {}
})


export const MessageContext : FC<{children: ReactNode}> = ({children}) => {
    const messageSubscription = useMessageSubscription()
    const [messages, setMessages] = useState<Message[]>([])
    const [selectedContact, setSelectedContact] = useState<string>("")

    useMessageListener(messageSubscription,message => {
        setMessages(messages => [...messages, message])
    })

    return <messageContext.Provider value={{
        messages,
        selectedContact: selectedContact,
        setSelectedContact: contact => setSelectedContact(contact)
    }}>
        {children}
    </messageContext.Provider>
}

export function useSelectContact() {
    const messageCtx = useContext(messageContext)
    return {
        set: messageCtx.setSelectedContact,
        value: messageCtx.selectedContact
    }
}

export function useMessages() : Message[] {
    const messageCtx = useContext(messageContext)
    const messages = useMessagesFromContact(messageCtx.selectedContact)

    return useMemo(() => {

        if (messages === DataState.Errored || messages === DataState.Loading) {
            return []
        }

        return messages
            .concat(messageCtx.messages)
            .filter(x => x.sender === messageCtx.selectedContact || x.receiver === messageCtx.selectedContact)
            .sort((a, b) => a.sent_at - b.sent_at)

    },[messages, messageCtx.messages.length, messageCtx.messages])
}
