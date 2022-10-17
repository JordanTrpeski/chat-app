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
            messages.push(...messages)
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
}

const messageContext = createContext<MessageContext>({
    messages:[],
})

export const MessageContext : FC<{children: ReactNode}> = ({children}) => {
    const messageSubscription = useMessageSubscription()
    const [messages, setMessages] = useState<Message[]>([])


    useMessageListener(messageSubscription,message => {
        setMessages(messages => [...messages, message])
    })

    return <messageContext.Provider value={{
        messages,
    }}>
        {children}
    </messageContext.Provider>
}

export function useMessages(contact: string) : Message[] {
    const messages = useMessagesFromContact(contact)
    const messageCtx = useContext(messageContext)

    return useMemo(() => {
        if (messages === DataState.Errored || messages === DataState.Loading) {
            return []
        }

        return messages
            .concat(messageCtx.messages)
            .filter(x => x.sender === contact || x.receiver === contact)
            .filter((value, index, self) => index === self.findIndex(t => t.id))
            .sort((a, b) => a.sent_at - b.sent_at)

    }, [messageCtx.messages, messages])
}
