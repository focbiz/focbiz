import { isStr, isFn } from './types'
import { globalThisPolyfill } from './globalThisPolyfill'
export const instOf = (value: any, cls: any) => {
  if (isFn(cls)) return value instanceof cls
  if (isStr(cls)) {
    let strCls = cls as string;
    let anyCls = cls as any;
    const windowfill: any = globalThisPolyfill;
    return windowfill[strCls] ? value instanceof windowfill[anyCls] : false
  }

  return false
}
