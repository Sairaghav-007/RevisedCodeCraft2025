import Lottie from 'lottie-react';
import { Card } from "flowbite-react";


export function DomainCard(props) {
  return (
    <Card
      className="max-w-sm flex flex-col items-center p-10 cursor-pointer "
      style={{
        backgroundColor: "transparent",
        border: "#AAAAAA 2px solid",
        borderRadius: "8px",
      }}
    >
      <div className="w-full h-48 flex justify-center z-0 pb-2">
        <Lottie animationData={props.animationData} loop={true} style={{ zIndex: 0 }} />
      </div>
      <div className="w-full h-10 flex flex-col justify-center items-center">
        <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          {props.title}
        </div>
      </div>
      <div className="w-full h-24 flex flex-col justify-center">
        <div className="font-normal text-center text-gray-700 dark:text-gray-400 justify-start pt-5">
          {props.description}
        </div>
      </div>
    </Card>
  )
}

export default DomainCard
