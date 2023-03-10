import _ from 'lodash'

import { Item } from '../data/data-list.mock'


const deepCopy = (obj: any) => _.cloneDeep(obj)

const addRootNode = (rootArray: Item[]) => {
  var root: Item = {
    items: rootArray,
    id: -1,
    title: null
  }

  return root
}

export type NodeInQueue = {
  node: Item
  index: number
  parentNode: Item | null
}
const breadthTraverse = (
  root: Item,
  fn: (node: Item, index: number, parentNode: Item | null, finish: () => void) => void
) => {
  var queue: NodeInQueue[] = []
  var finishFlag = false

  const finish = () => { finishFlag = true }
  const putOnQueue = (node: Item) => {
    if (node.items)
      queue.push(...node.items.map((item, index) => ({
        node: item,
        index,
        parentNode: node
      })))
  }
  const traverse = () => {
    if (finishFlag)
      return

    const node = queue.shift()

    if (!node)
      return

    fn(node.node, node.index, node.parentNode, finish)
    putOnQueue(node.node)
    traverse()
  }

  putOnQueue({
    items: [root],
    id: -2,
    title: ''
  })
  traverse()
}

const getNodeById = (root: Item, id: number | string): undefined | Item => {
  var result = undefined

  breadthTraverse(root, (node, index, parentNode, finish) => {
    if (node.id === id) {
      result = node
      finish()
    }
  })

  return result
}

const setNodeById = (root: Item, id: number | string, fn: (node: Item) => void) => {
  breadthTraverse(root, (node, index, parentNode, finish) => {
    if (node.id === id) {
      fn(node)
      finish()
    }
  })
}

const moveNode = (
  root: Item,
  movedNodeId: number | string,
  newParentNodeId: number | string,
  newIndex: number
) => {
  if ([-1, -2].includes(parseInt(movedNodeId + '')))
    throw new Error(`Node with ${movedNodeId} isn't supported`)

  var rootCopy = deepCopy(root)
  var movedNode: undefined | Item

  // removing node from its old place
  breadthTraverse(rootCopy, (node, index, parentNode, finish) => {
    if (node.id === movedNodeId && parentNode) {
      movedNode = node
      parentNode.items?.splice(index, 1)
      finish()
    }
  })

  if (!movedNode)
    throw new Error(`Node with id ${movedNodeId} wasn't found`)

  // adding node to its new place
  setNodeById(rootCopy, newParentNodeId, node =>
    movedNode && node.items?.splice(newIndex, 0, movedNode)
  )

  return rootCopy
}

const AisParentOfB = (A: Item, B: Item) => {
  var flag = false

  breadthTraverse(A, (node, index, parentNode, finish) => {
    if (!!node.items?.some((item: Item) => item.id === B.id)) {
      flag = true
      finish()
    }
  })

  return flag
}


export {
  deepCopy,
  addRootNode,
  breadthTraverse,
  getNodeById,
  setNodeById,
  moveNode,
  AisParentOfB,
}