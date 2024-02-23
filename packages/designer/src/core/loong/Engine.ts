import { uid } from '@focbiz/utils'
import { Hover } from './Hover';

/**
 * 设计器引擎类
 */
export class Engine {
  id: string
  hover: any
  constructor(props:any) {
    this.id = uid();
  }
  init() {
    this.hover = new Hover()
  }
}
