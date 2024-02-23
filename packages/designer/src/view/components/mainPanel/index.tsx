import React from 'react'
import { usePrefix } from '../../hooks';
import './index.less';

export const MainPanel: React.FC<React.PropsWithChildren> = (props) => {
    const prefix = usePrefix('main-panel');
    return (
        <div className={prefix}>
            {props?.children}
        </div>
    )
}

export const ContentPanel: React.FC<React.PropsWithChildren> = (props) => {
    const prefix = usePrefix('content-panel');
    return (
        <div className={prefix}>
            {props?.children}
        </div>
    )
}


