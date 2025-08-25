import React from 'react'

const Std = (props) => {
  return (
    <div className='text-center'>
        <h2 className='font-semibold p-1 cursor-pointer text-xl' >{props.name}</h2>
        <h2 className='cursor-pointer'>{props.email}</h2>
        <h2 className='cursor-pointer'>{props.no}</h2>
    </div>
  )
}

export default Std