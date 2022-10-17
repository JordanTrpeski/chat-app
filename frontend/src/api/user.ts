import {api_url, process_result} from "./config";

export interface Profile {
    first_name : string,
    last_name : string,
    bio : string
}

export interface PasswordChangeDetails {
    old_password: string,
    new_password: string
}

export async function get_profile(username: string) {
    const value = await fetch(api_url + `/user/profile/${encodeURIComponent(username)}`, {
        mode: 'cors',
        credentials: 'include'
    }).then(response => response.json())

    return process_result<Profile>(value)
}

export async function login(username : string, password : string) {
    const value = await fetch(api_url + `/user/login`,  {
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            'content-type': 'application/json'
        },
        mode: 'cors',
        credentials: 'include'
    }).then(response => response.json())

    return process_result<string>(value)
}

export async function change_profile(profile: Profile) {
    const value = await fetch(api_url + `/user/profile`, {
        method: 'POST',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        },
        mode: 'cors',
        credentials: 'include'
    }).then(response => response.json())
    return process_result<undefined>(value)
}

export async function change_password(details: PasswordChangeDetails) {
    const value = await fetch(api_url + `/user/password`,  {
        method: 'POST',
        body: JSON.stringify(details),
        headers: {
            'content-type': 'application/json'
        },
        mode: 'cors',
        credentials: 'include'
    }).then(response => response.json())
    return process_result<undefined>(value)
}

export async function get_username() {
    const value = await fetch(api_url + `/user/self`, {
        mode: 'cors',
        credentials: 'include'
    }).then(response => response.json())
    return process_result<string>(value)
}

export async function register(username: string, password: string, profile: Profile) {
    const value = await fetch(api_url + `/user/register`, {
        method: 'POST',
        body: JSON.stringify({
            username,
            password,
            profile
        }),
        headers: {
            'content-type': 'application/json'
        },
        mode: 'cors',
        credentials: 'include'
    }).then(response => response.json())
    return process_result<undefined>(value)
}
