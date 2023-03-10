import React from 'react'

import { Item } from '../data/data-list.mock'
import DataListWithState from './DataListWithState'
import DndWrapper from './DndWrapper'
import { addRootNode, breadthTraverse, deepCopy, moveNode } from '../utils/tree'


export type DataListDndProps = {
  initialList: Item[]
}


const DataListDnd: React.FC<DataListDndProps> = ({
  initialList
}) => {
  const [list, setList] = React.useState(initialList)
  const [update, setUpdate] = React.useState(false)
  const addDnd = (_list: Item[]) => {
    const listCopy = deepCopy(_list)
    var root = addRootNode(listCopy)

    breadthTraverse(root, (node, index, parentNode) => {
      node.title = <DndWrapper
        key={node.id}
        node={{ ...node }}
        onDropTop={parentNode?.id === -1 && index === 0 ?
          (movedNodeId: number | string) => {
            setList(moveNode(root, movedNodeId, parentNode.id, index - 1).items)
            setUpdate(!update)
          }
          :
          undefined
        }
        onDropBottom={(movedNodeId: number | string) => {
          setList(moveNode(root, movedNodeId, parentNode?.id || 0, index).items)
          setUpdate(!update)
        }
        }
        onDropBottomRight={(movedNodeId: number | string) => {
          setList(moveNode(root, movedNodeId, node.id, 0).items)
          setUpdate(!update)
        }
        }
      />
    })

    return listCopy
  }

  return (
    <DataListWithState
      key={update + ''}
      initialList={addDnd(list)}
    />
  )
}


export default DataListDnd