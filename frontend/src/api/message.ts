import {api_url, process_result} from "./config";

export interface MessageContainer<T> {
    id: string,
    sent_at: number,
    sender: string,
    receiver: string,
    value: T
}

export interface TextMessageValue {
    text: string
}

export type Message = MessageContainer<TextMessageValue>


export async function get_messages_from_contact(contact: string, page: number) {
    const value = await fetch(api_url + `/message/${encodeURIComponent(contact)}/${encodeURIComponent(page)}`)
        .then(response => response.json())
    return process_result<Message[]>(value)
}

export async function send_message_to_contact(contact: string, message: TextMessageValue) {
    const init = {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
            'content-type': 'application/json'
        }
    }
    const value = await fetch(api_url + `/message/${encodeURIComponent(contact)}}`, init)
        .then(response => response.json())
    return process_result<undefined>(value)
}

export function subscribe_to_messages() {
    return new EventSource(api_url + `/message/event/subscribe`)
}