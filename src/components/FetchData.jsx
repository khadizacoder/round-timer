import React from 'react'

const FetchData = ({todo}) => {
  return (
    <div className='p-20'>
        <h1 className='font-bold'>Length: {todo.length}</h1>
        {
            todo.map(item => (
                <li>{item.title}</li>
            ))
        }
    </div>
  )
}

export default FetchData;