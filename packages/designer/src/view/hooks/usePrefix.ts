import { useLoong } from "@focbiz/loong"
import { cls, type IPrefixCls } from '../loong/prefixCls';

export const usePrefix = (after: string) => {
    const [data] = useLoong<IPrefixCls>(cls);
    return data.prefix + '-' + after
}