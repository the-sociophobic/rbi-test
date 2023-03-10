import React from 'react'

import { useDrag } from 'react-dnd'

import { Item } from '../data/data-list.mock'
import { AisParentOfB } from '../utils/tree'
import DropLine from './DropLine'


export type DndWrapperProps = {
  node: Item
  onDropTop?: (movedNodeId: number | string) => void
  onDropBottom: (movedNodeId: number | string) => void
  onDropBottomRight: (movedNodeId: number | string) => void
}


const DndWrapper: React.FC<DndWrapperProps> = ({
  node,
  onDropTop,
  onDropBottom,
  onDropBottomRight
}) => {
  const [{ isDragged, anotherIsDragged }, drag] = useDrag(() => ({
    type: 'BOX',
    item: node,
    collect: (monitor) => ({
      isDragged: monitor.isDragging(),
      anotherIsDragged: !monitor.isDragging() && monitor.getItem() !== null
    })
  }))

  const draggedNodeIsParent = (draggedNode: Item, node: Item) => AisParentOfB(draggedNode, node)

  return (
    <div
      ref={drag}
      className={`DndWrapper ${isDragged && 'DndWrapper--dragged'}`}
    >
      {(anotherIsDragged && onDropTop) &&
        <DropLine
          className={'DndWrapper__DropLine--top'}
          onDrop={(draggedNode: Item) => onDropTop(draggedNode.id)}
          canDrop={(draggedNode: Item) => !draggedNodeIsParent(draggedNode, node) && draggedNode.id !== node.id}
        />
      }
      {node.title}
      {anotherIsDragged &&
        <DropLine
          className={'DndWrapper__DropLine--bottom'}
          onDrop={(draggedNode: Item) => onDropBottom(draggedNode.id)}
          canDrop={(draggedNode: Item) => !draggedNodeIsParent(draggedNode, node) && draggedNode.id !== node.id}
        />
      }
      {anotherIsDragged &&
        <DropLine
          className={'DndWrapper__DropLine--bottom-right'}
          onDrop={(draggedNode: Item) => onDropBottomRight(draggedNode.id)}
          canDrop={(draggedNode: Item) => !draggedNodeIsParent(draggedNode, node) && draggedNode.id !== node.id}
        />
      }
    </div>
  )
}


export default React.memo(DndWrapper)
