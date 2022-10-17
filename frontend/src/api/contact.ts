import {api_url, process_result} from "./config";

export async function get_contacts() {
    const value = await fetch(api_url + `/contact/all`, {
        mode: 'cors',
        credentials: 'include'
    }).then(response => response.json())
    return process_result<string[]>(value)
}

export async function add_contact(username: string) {
    const value = await fetch(api_url + `/contact/${encodeURIComponent(username)}`, {
        method: 'put',
        mode: 'cors',
        credentials: 'include'
    }).then(response => response.json())
    return process_result<undefined>(value)
}

