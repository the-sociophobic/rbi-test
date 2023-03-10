import { ReactNode } from 'react'

import { SelectionItem } from '@jetbrains/ring-ui/dist/table/selection'


export interface Item extends SelectionItem {
    title: ReactNode
    collapsible?: boolean
    selectable?: boolean
    items?: Item[]
}
declare const items: Item[]
export declare const moreItems: {
    id: number
    selectable: boolean
    collapsible: boolean
    title: JSX.Element | string
}[]


export default items
