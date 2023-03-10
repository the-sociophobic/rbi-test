import React from 'react'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import '@jetbrains/ring-ui/dist/style.css'

import DataListDnd from './components/DataListDnd'
import Description from './components/Description'
import data from './data/data-list.mock'
import './styles/index.sass'


const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='App'>
        <Description />
        <DataListDnd initialList={data} />
      </div>
    </DndProvider>
  )
}


export default App
