import React, { PureComponent } from 'react'

// import TableSelection from '@jetbrains/ring-ui/dist/table/selection'

import DataList from '@jetbrains/ring-ui/dist/data-list/data-list'
import Selection from '@jetbrains/ring-ui/dist/data-list/selection'
import { FormattedItem, moreLessButtonStates } from '@jetbrains/ring-ui/dist/data-list/item'

import { Item, moreItems } from '../data/data-list.mock'


export type DataListDndProps = {
  initialList: Item[]
}


class DataListDnd extends PureComponent<DataListDndProps> {
  // state uses getChildren

  expandedItems = new Set()
  isItemCollapsible = (item: Item) => item.collapsible && item.items && item.id > 10
  isItemCollapsed = (item: Item) => !this.expandedItems.has(item.id)

  getChildren = (item: Item) => {
    const collapsible = this.isItemCollapsible(item)
    const collapsed = this.isItemCollapsed(item)
    return (collapsible && collapsed) || !item.items ? [] : item.items
  }

  state = {
    data: this.props.initialList,
    selection: new Selection({
      data: this.props.initialList,
      isItemSelectable: item => item.selectable,
      getChildren: this.getChildren
    })
  }

  // moreExpandableItems = new Set([this.props.initialList[0].id])
  // moreExpandedItems = new Set()

  // itemMoreLessState = (item: FormattedItem<Item>) => {
  //   if (item.id != null && this.moreExpandableItems.has(item.id)) {
  //     return this.moreExpandedItems.has(item.id)
  //       ? moreLessButtonStates.LESS
  //       : moreLessButtonStates.MORE
  //   } else {
  //     return moreLessButtonStates.UNUSED
  //   }
  // }

  // onItemMoreLess = (item: Item, more: boolean) => {
  //   if (more) {
  //     this.moreExpandedItems.add(item.id)
  //     item.items = item.items ?? []
  //     item.items = item.items.concat([...moreItems])
  //   } else {
  //     this.moreExpandedItems.delete(item.id)
  //     item.items = item.items ?? []
  //     item.items = item.items.slice(0, item.items.length - moreItems.length)
  //   }

  //   const data = this.state.data
  //   this.setState({ data: [...data] })
  // }

  // onSelect = (selection: TableSelection<Item>) => {
  //   this.setState({ selection })
  // }

  itemFormatter = (item: Item): FormattedItem<Item> => {
    const items = this.getChildren(item)
    const collapsible = this.isItemCollapsible(item)
    const collapsed = this.isItemCollapsed(item)

    const onCollapse = () => {
      this.expandedItems.delete(item.id)
      const data = this.state.data
      this.setState({ data: [...data] })
    }

    const onExpand = () => {
      this.expandedItems.add(item.id)
      const data = this.state.data
      this.setState({ data: [...data] })
    }

    return {
      ...item,
      items,
      collapsible,
      collapsed,
      onCollapse,
      onExpand
    }
  }

  render() {
    return (
      <DataList
        data={this.state.data}
        selection={this.state.selection}
        // onSelect={this.onSelect}
        itemFormatter={this.itemFormatter}
        // onItemMoreLess={this.onItemMoreLess}
        // itemMoreLessState={this.itemMoreLessState}
      />
    )
  }
}


export default DataListDnd