import React from 'react';
import Instructions from '../components/Instructions';
import domain from '../assets/domain.json';
import food from '../assets/food.json';
import info from '../assets/info.json';
import keyboard from '../assets/keyboard.json';

const imageData = [
  {
    title: 'Event Info',
    description: 'This is a 24 Hour Hackathon conducted by M.Tech CSE (Integrated) Department of Sri Sairam Engineering College. They can use AI and other tools to fasten their workflow.',
    animationData: info,
    width: 40,
    height: 110
  },
  {
    title: 'Bring All Peripherals',
    description: 'Our college has ethernet connections only, so remember to bring ethernet cable, Chargers, Mouse, Keyboard, and other periperals you might need.',
    animationData: keyboard,
    width: 30,
    height: 90
  },
  {
    title: 'On Spot Domain',
    description: 'Participants will be given onspot topics to work for the hackathon, for the domains, webdev, appdev and AI. Any prior work done for the hackathon will not be accepted.',
    animationData: domain,
    width: 30,
    height: 80
  },
  {
    title: 'Food and Refreshment',
    description: 'Sufficient Refreshment will be provided for the participants. Lunch will be provided. Lunch timing will be 1 hour.',
    animationData: food,
    width: 30,
    height: 80
  },
];

const InfoSection = () => {
  return (
    <div className="flex flex-col mx-auto w-[90%]" id="instruction">
      <h2 className="font-semibold text-white text-center text-6xl mt-32">Instructions</h2>
      {imageData.map((item, index) => (
        <Instructions
          key={index}
          width={item.width}
          height={item.height}
          animationData={item.animationData}
          title={item.title}
          description={item.description}
          reverse={index % 2 !== 0} 
        />
      ))}
    </div>
  );
};

export default InfoSection;
