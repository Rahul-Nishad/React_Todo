import React from 'react'

const Items = ({ data, deleteTodo ,id }) => {
  return (
    <>
    <div>
    <li className='todo-item'>{data}
    <button onClick={() => deleteTodo(id)}> Delete </button>
    </li>
    </div>
    </>
  )
}

export default Items