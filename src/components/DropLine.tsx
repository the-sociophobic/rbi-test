import React from 'react'

import { useDrop } from 'react-dnd'
import { Item } from '../data/data-list.mock'


export type DropLineProps = {
  onDrop: (draggedNode: Item) => void
  canDrop: (draggedNode: Item) => boolean
  className?: string
}


const DropLine: React.FC<DropLineProps> = ({
  onDrop,
  canDrop,
  className
}) => {
  const [{ _canDrop, isOver, isDragging }, drop] = useDrop(() => ({
    accept: 'BOX',
    drop: (item: Item) => onDrop(item),
    canDrop: canDrop,
    collect: (monitor: any) => ({
      _canDrop: !!monitor.canDrop(),
      isOver: monitor.isOver(),
      isDragging: monitor.getItem() !== null
    })
  }))

  return (
    <div
      className={`
        DndWrapper__DropLine
        ${className}
        ${isOver && 'DndWrapper__DropLine--hovered'}
        ${!(isDragging && _canDrop) && 'DndWrapper__DropLine--d-none'}
      `}
      ref={drop}
    />
  )
}


export default React.memo(DropLine)
