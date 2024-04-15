
import { useSyncExternalStore } from 'use-sync-external-store/shim'
export function useLoong<T>(hander: any) {
    const newData = useSyncExternalStore((cb: Function) => {
        hander.loongEr.subscribe(cb)
        return () => {
        }
    }, () => {
        return hander.chamber.message.get(hander.loongRoar.ryuko)
    }, () => { })

    return [newData, (a: Object, isCloseNotify: boolean) => {
        hander.loongRoar.publish(a)
        if (!isCloseNotify) {
            hander.chamber.notify()
        }
    }] as [T, (a: T, isCloseNotify?: boolean) => void]
}