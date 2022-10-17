import {useAction, useApi} from "../api/api-hook";
import {add_contact, get_contacts} from "../api/contact";
import {
    get_messages_from_contact, Message,
    send_message_to_contact,
    subscribe_to_messages,
    TextMessageValue
} from "../api/message";
import {useCallback, useEffect, useMemo} from "react";
import {useUsername} from "./auth";

export function useContacts() {
    return useApi('contacts', get_contacts)
}

export function useAddContact(username: string) {
    return useAction(() => add_contact(username), [username])
}

export function useMessagesFromContact(contact: string, page: number) {
    return useApi(`messages.${contact}.${page}`,() => get_messages_from_contact(contact, page))
}

export function useSendMessageToContact(contact: string, message: TextMessageValue) {
    return useAction(() => send_message_to_contact(contact, message), [contact, message])
}

export function useMessageListener(callback: (message: Message) => void) {
    const username = useUsername()
    const source = useMemo(subscribe_to_messages, [username])
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