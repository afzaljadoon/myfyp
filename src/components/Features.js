import React from 'react';
import Lock from './Images/Lock.svg';
import ethereum from './Images/ethereum.svg';
import ApprovedDelivery from './Images/ApprovedDelivery.svg';
import HandCursor from './Images/HandCursor.svg';
import LowPrice from './Images/LowPrice.svg';
import TimeSpan from './Images/TimeSpan.svg';

const Features = () => {
  return (
    <div id="features" className="bg-offwhite text-black p-0 md:p-10 flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="flex flex-col justify-center items-center md:items-start mb-8 md:mb-0">
          <div className="text-5xl md:text-7xl font-bold transform md:-rotate-90 whitespace-nowrap ml-4">
            Features
          </div>
          <div className="border-t-4 border-blue-500 w-full mt-2 md:hidden"></div>
        </div>
        <div className="hidden md:block border-l-4 border-blue-500 h-auto md:h-80 mr-8"></div>
        <div className="flex flex-col space-y-8 md:space-y-16 text-xl md:text-3xl mt-8 md:mt-0 ml-0 md:ml-8">
          <div className="flex items-center space-x-4 md:space-x-12">
            <img src={Lock} alt="Encryption Icon" className="w-10 h-10 md:w-15 md:h-14" />
            <span>Secured by 256 bit encryption</span>
          </div>
          <div className="flex items-center space-x-4 md:space-x-12">
            <img src={ethereum} alt="Ethereum Icon" className="w-10 h-10 md:w-15 md:h-14" />
            <span>Backed by ethereum based technology</span>
          </div>
          <div className="flex items-center space-x-4 md:space-x-12">
            <img src={ApprovedDelivery} alt="Verifiable Icon" className="w-10 h-10 md:w-15 md:h-14" />
            <span>Verifiable transactions</span>
          </div>
          <div className="flex items-center space-x-4 md:space-x-12">
            <img src={HandCursor} alt="Easy to Use Icon" className="w-10 h-10 md:w-15 md:h-14" />
            <span>Easy to use</span>
          </div>
          <div className="flex items-center space-x-4 md:space-x-12">
            <img src={LowPrice} alt="Cheaper Icon" className="w-10 h-10 md:w-15 md:h-14" />
            <span>Cheaper than ballot voting system</span>
          </div>
          <div className="flex items-center space-x-4 md:space-x-12">
            <img src={TimeSpan} alt="Faster Icon" className="w-10 h-10 md:w-15 md:h-14" />
            <span>Faster voting process</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 767px) {
          .transform {
            transform: rotate(0) !important;
            text-align: center;
            margin-bottom: 1rem;
          }
          .border-t-4 {
            display: block;
          }
          .border-l-8 {
            display: none;
          }
        }
        @media (min-width: 768px) {
          .transform {
            transform: rotate(-90deg);
          }
          .border-t-4 {
            display: none;
          }
          .border-l-8 {
            display: block;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Features;
