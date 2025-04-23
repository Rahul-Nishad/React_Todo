import React from 'react'

const Items = ({ data, deleteTodo ,id }) => {
  return (
    <>
    <li>{data}</li>
    <button onClick={() => deleteTodo(id)}> Delete </button>
    </>
  )
}

export default Items