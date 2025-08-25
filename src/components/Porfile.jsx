import React from 'react';

const Profile = (props) => {
  return (
    <div className='text-center'>
        <div className='flex justify-center '>
            <img className='border-yellow-500 border-4 rounded-full h-[200px] w-[200px] hover:-translate-y-2 duration-500' src={props.src} alt="img" />
        </div>
      <h2 className='font-semibold p-1' >{props.name}</h2>
      <h2 className='font-semibold p-1'>{props.post}</h2>
      <h2>{props.no}</h2>
      <h2>{props.email}</h2>
    </div>
  );
};

export default Profile;