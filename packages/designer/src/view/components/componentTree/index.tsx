
import React from 'react'
import { AuxTool } from '../auxTool'
export const ComponentTree: React.FC = () => {

    return <>
        <Tree />
        <AuxTool />
    </>
}



export const Tree: React.FC = () => {

    return <div>
        <TreeNode />
        <TreeNode />
        <TreeNode />
    </div >
}

export const TreeNode: React.FC = () => {

    return <div></div>
}
