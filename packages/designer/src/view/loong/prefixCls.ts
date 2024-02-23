import { loong } from '@focbiz/loong'
export type IPrefixCls = {
    prefix: string
}
const clsData = { prefix: 'focbiz' };
export const cls = loong(clsData)