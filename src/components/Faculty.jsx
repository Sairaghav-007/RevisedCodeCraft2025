import React from 'react';

const Faculty = (props) => {
  return (
    <div className='text-center pt-4 text-white'>
        <div className='flex justify-center  '>
            <img className=' border-yellow-500 border-4 rounded-full h-[200px] w-[200px] hover:-translate-y-4 duration-500'  src={props.src} alt="img" />
        </div>
      <h2 className='font-semibold p-1 cursor-pointer' >{props.name}</h2>
      <h2 className='cursor-pointer'>{props.post}</h2>
    </div>
  );
}

export default Faculty;
