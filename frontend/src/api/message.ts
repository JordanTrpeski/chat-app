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
    const value = await fetch(api_url + `/message/${encodeURIComponent(contact)}/${encodeURIComponent(page)}`, {
        mode: 'cors',
        credentials: 'include'
    }).then(response => response.json())
    return process_result<Message[]>(value)
}

export async function send_message_to_contact(contact: string, message: TextMessageValue) {
    const value = await fetch(api_url + `/message/${encodeURIComponent(contact)}`,{
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
            'content-type': 'application/json'
        },
        mode: 'cors',
        credentials: 'include'
    }).then(response => response.json())
    return process_result<undefined>(value)
}

export function subscribe_to_messages() {
    return new EventSource(api_url + `/message/event/subscribe`, { withCredentials: true })
}