import React from 'react'


const Description: React.FC = () =>
  <div className='Description'>
    Тестовое задание. Скрещивание react-dnd и @jetbrains/ring-ui/dist/table/selection. <a href='https://github.com/the-sociophobic/rbi-test' target='_blank' rel="noreferrer">Код на гитхабе</a>.<br /><br />
    Что можно улучшить:
    <ul>
      <li>Есть пара ошибок с индексами. Блоки вроде не всегда встают на нужное место</li>
      <li>Поднять DndWrapper на самый верх обёртки каждой строки. Сейчас он оборачивает только надпись. А сам находится внутри других слоёв. Поэтому вместо dnd иногда срабатывает, например, клик на ссылку</li>
      <li>collapsible item не должны складываться после переставления элемента в списке. Для этого вместо перерисовки компонента DataListWithState на каждое изменение, надо обновлять его state, в котором хранится list</li>
      <li>Некоторые полоски для вставки избыточны: дублируют действие / вставляют блок на то место где он уже находится. Надо дописать пару if'ов, чтобы скрыть лишние полоски</li>
    </ul>
    <br />
    <br />
  </div>


export default Description
