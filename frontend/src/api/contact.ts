import {api_url, process_result} from "./config";

export async function get_contacts() {
    const value = await fetch(api_url + `/contact/all`)
        .then(response => response.json())
    return process_result<string[]>(value)
}

export async function add_contact(username: string) {
    const value = await fetch(api_url + `/contact/${encodeURIComponent(username)}`, {
        method: 'put'
    }).then(response => response.json())
    return process_result<undefined>(value)
}

