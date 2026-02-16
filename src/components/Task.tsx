import React from 'react'
import {Item} from '../models/Item'
type Props = {
    item: Item,
    delFn: (itemId: number)=>void
}
const Task: React.FC<Props> = ({item, delFn}) => {
    const [checked, setChecked] = React.useState<boolean>(false)
  return (
    <div>
      <input type='checkbox' checked={checked} onChange={() => setChecked(!checked) }/>
      {item.name}
      <button style={{backgroundColor: checked? 'green': 'red'}} onClick={() => delFn(item.id)}>Delete</button>
    </div>
  )
}

export default Task
