import {
    change_password,
    change_profile,
    get_profile,
    get_username,
    login,
    PasswordChangeDetails,
    Profile, register
} from "../api/user";
import {DataState, useAction, useApi} from "../api/api-hook";


export function useUsername() {
    return useApi('username', get_username)
}

export function useIsLoggedIn() {
    const username = useUsername()
    return typeof username === "string"
}

export function useIsLoggedOut() {
    const username = useUsername()
    return username === DataState.Errored
}

export function useProfile(username: string) {
    return useApi('profile.' + username, () => get_profile(username))
}


export function useLogin(username : string, password : string) {
    return useAction(() => login(username, password), [username, password])
}

export function useChangeProfile(profile: Profile) {
    return useAction(() => change_profile(profile), [profile])
}

export function useChangePassword(details: PasswordChangeDetails) {
    return useAction(() => change_password(details), [details])
}

export function useRegister(username: string, password: string, profile: Profile) {
    return useAction(() => register(username, password, profile), [username, password, profile])
}
