import { useAtom } from 'jotai'
import storeAtom from '../store'

export default function useStore<T>() {
	const [state, dispatch] = useAtom(storeAtom)

    return [state, dispatch] as const
}
