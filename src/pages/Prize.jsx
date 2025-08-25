import React, { useState } from 'react';

const PrizePool = () => {

  return (
    <div className="bg-none mt-10 px-6 flex flex-col items-center justify-center pt-40" id="prize">
      <h2 className="text-4xl md:text-6xl text-yellow-400 font-extrabold mb-8 text-center">
        Prize Pool of <span className="text-white">₹15,000</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl">
        {[
          { title: '1st Prize', amount: '₹6,000' },
          { title: '2nd Prize', amount: '₹4,000' },
          { title: '3rd Prize', amount: '₹2,000' },
          { title: 'Domain Winners', amount: '₹1,000 each', subText: 'Total 3 Domains' },
        ].map((prize, index) => (
          <div
            key={index}
            className="bg-white/15 backdrop-blur-2xl p-4 md:p-6 border-2 border-white/15 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-500"
            >
            <h3 className="text-3xl md:text-4xl text-white font-bold mb-2 md:mb-4 text-center">
              {prize.title}
            </h3>
            <p className="text-4xl md:text-5xl text-white text-center font-extrabold">
              {prize.amount}
            </p>
            {prize.subText && (
              <p className="text-lg text-gray-200 text-center mt-2">
                {prize.subText}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="grid place-items-center gap-5 md:gap-10 items-center justify-center mt-8">
        {[
          {
            title: 'Early Bird Offer',
            amount: '₹200/team',
            subText: '(Limited to first 20 teams)',
            extraText: 'Hurry! Offer valid for a limited time only.',
          },
          {
            title: 'Registration Fees',
            amount: '300/team',
            subText: '(After Early Bird Offer)',
          },
        ].map((offer, index) => (
          <div
            key={index}
            className="grid place-items-center p-4 md:p-6 bg-white/15 backdrop-blur-2xl border-2 border-white/15 rounded-xl shadow-lg text-center transform transition-transform hover:scale-110 cursor-pointer h-[26vh] md:h-[30vh]"
          >
            <p className="text-3xl md:text-5xl text-white font-extrabold mb-2 md:mb-4 tracking-wide">
              {offer.title}
            </p>
            <div className="flex flex-col items-center">
              <p className="text-3xl md:text-4xl text-yellow-200 font-bold">
                {offer.amount}
              </p>
              <p className="text-lg md:text-2xl text-gray-100 mt-1 font-semibold">
                {offer.subText}
              </p>
              {offer.extraText && (
                <p className="text-sm md:text-xl text-red-300 mt-1">
                  {offer.extraText}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrizePool;
