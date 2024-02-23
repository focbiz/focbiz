type ITreeNode = any;
export class TreeNode {
  root: ITreeNode
  prent: ITreeNode
  id: string
  depth = 0
  hidden = false
  componentName = 'NO_NAME_COMPONENT'
  sourceName = ''
  children: ITreeNode[] = []
  constructor(props: {
    root: ITreeNode,
    prent: ITreeNode,
    id: string,

  }) {

    this.root = props.root
    this.prent = props.prent
    this.id = props.id

  }

}