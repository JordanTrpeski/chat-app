export const api_url = "http://localhost:5000"

export function process_result<T>(result: any) {
    if (!result.success) {
        throw new TypeError(result.error)
    }
    return result.result as T
}

