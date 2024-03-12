import React from 'react';
import { usePrefix } from '../../hooks';
import { Logo, HeaderTools, Action } from '../../widget';
import './index.less';

export const Header: React.FC = () => {
    const prefix = usePrefix('designer-header');
    return <div className={prefix}>
        <Logo />
        <HeaderTools />
        <Action />
    </div>
}   