
import { useSyncExternalStore } from 'use-sync-external-store/shim'
export function useLoong<T>(hander: any) {
    const newData = useSyncExternalStore((cb: Function) => {
        hander.loongEr.subscribe(cb)
        return () => {
            hander.chamber.clansman.delete(hander.loongEr.ryuko)
        }
    }, () => {
        return hander.chamber.message.get(hander.loongRoar.ryuko)
    }, () => { })

    return [newData, (a: Object) => {
        hander.loongRoar.publish(a)
        hander.chamber.notify()
    }] as [T, (a: T) => void]
}