import React from 'react'


const Description: React.FC = () =>
  <div className='Description'>
    Тестовое задание. Скрещивание react-dnd и @jetbrains/ring-ui/dist/table/selection. <a href='https://github.com/the-sociophobic/rbi-test' target='_blank' rel="noreferrer">Код на гитхабе</a>.<br /><br />
    Что можно улучшить:
    <ul>
      <li>Поднять DndWrapper на самый верх обёртки каждой строки. Сейчас он оборачивает только надпись. А сам находится внутри других слоёв. Поэтому вместо dnd иногда срабатывает, например, нажатие галочки</li>
      <li>Написать свой обход деревьев. Иногда нужно найти определённый элемент дерева и остановить проход. Но в библиотеке tree-traversal нет возможности остановаить обход</li>
      <li>Сделать 2 dnd-области для каждой DropLine. Для добавления droppedNode как соседа и добавления как ребёнка</li>
      <li>Сделать dnd-область сверху первого node в массиве items. Сейчас dnd-области отрисовываются только под node</li>
    </ul>
    <br />
    <br />
  </div>


export default Description
