import {useQuery} from "react-query";
import {useCallback, useState} from "react";

export enum DataState {
    Loading,
    Errored,
}

export type ApiResponse<T> = DataState | T

export function useApi<T>(key : string, fn : () => Promise<T>) : ApiResponse<T> {
    const {isLoading, error, data} = useQuery(key,async () => {
        return await fn()
    })
    if (isLoading) {
        return DataState.Loading
    }

    if (data && !error) {
        return data
    }

    return DataState.Errored
}

export function useAction<T>(fn : () => Promise<T>, deps: any[]) {
    const [response, setResponse] = useState<T|undefined>(undefined)
    const [error, setError] = useState<undefined|any>(undefined)
    const [sent, setSent] = useState<boolean>(false)
    const [errored, setErrored] = useState<boolean>(false)

    const send = useCallback(() => {
        fn().then(value => {
            setResponse(value)
            setSent(true)
        }).catch(error => {
            setError(error)
            setErrored(true)
        })
    }, deps)

    return {
        response,
        error,
        send,
        sent,
        errored,
        reset: () => {
            setResponse(undefined)
            setError(undefined)
            setSent(false)
            setErrored(false)
        }
    }
}
