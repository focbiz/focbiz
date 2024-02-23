import React from 'react'
import { Logo, HeaderTools, Action } from '../../widget';
import './index.less'
export const Header: React.FC = () => {
    return <div>
        <Logo />
        <HeaderTools />
        <Action />
    </div>
}   