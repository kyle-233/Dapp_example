type type = "localstorage" | "sessionstorage"

type key = string

type value = string

export const getStorageItem = (type: type, key: key): string | null => {
    return type === "localstorage" ? localStorage.getItem(key) : sessionStorage.getItem(key)
}

export const setStorageItem = (type: type, key: key, value: value): void => {
    return type === "localstorage" ? localStorage.setItem(key, value) : sessionStorage.setItem(key, value)
}

export const removeStorageItem = (type: type, key: key): void => {
    return type === "localstorage" ? localStorage.removeItem(key) : sessionStorage.removeItem(key)
}