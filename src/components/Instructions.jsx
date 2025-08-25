import React from 'react';
import Lottie from 'lottie-react';

const Instructions = ({ animationData, title, description, reverse, width, height }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} w-full mx-auto items-center bg-transparent border-transparent md:h-[50vh] md:py-0`}
    >
      <div style={{ width: `${width}%`, height: `${height}%` }}>
        <Lottie animationData={animationData} />
      </div>
      <div className={`flex flex-col justify-between p-10 md:w-1/2 ${reverse ? 'text-right' : 'text-left'}`}>
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-2xl text-gray-700 dark:text-gray-400 text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Instructions;
