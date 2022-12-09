interface PersistentStorage {
	getItem(key: string): string | null
	setItem(key: string, value: any): void
}

class LocalStorage implements PersistentStorage {
	getItem(key: string) {
		const item = localStorage.getItem(key)

		if (item === null) return undefined

		if (item === 'null') return null
		if (item === 'undefined') return undefined

		try {
			return JSON.parse(item)
		} catch {}

		return item
	}
	setItem(key: string, value: any) {
		const item = localStorage.getItem(key)
		if (item === null || item === 'undefined') {
			localStorage.setItem(key, JSON.stringify(value))
		} else if (value === undefined) {
			localStorage.removeItem(key)
		} else {
			localStorage.removeItem(key)
			localStorage.setItem(key, JSON.stringify(value))
		}
	}
	removeItem(key: string) {
		localStorage.removeItem(key)
	}
}

class MockStorage implements PersistentStorage {
	getItem() {
		return null
	}
	setItem() {}
}
let loading = true
if (typeof window !== 'undefined') {
	loading = false
}

export const persistentStorage = !loading ? new LocalStorage() : new MockStorage()
