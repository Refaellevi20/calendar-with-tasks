
export const localStoreService = {
    saveToStorage,
    loadFromStorage,
}

function saveToStorage<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage<T>(key: string): T | undefined {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) as T : undefined
}
