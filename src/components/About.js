import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-gray-900 text-white p-6 md:p-10 flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row  items-center">
        <div className="flex flex-col justify-center items-center md:items-start md:mr-6 mb-8 md:mb-0">
          <div className="text-4xl md:text-7xl font-bold transform md:-rotate-90 whitespace-nowrap">
            About
          </div>
          <div className="border-t-4 md:border-t-0 border-white mt-4 w-full md:hidden"></div>
        </div>
        <div className="border-l-0 md:border-l-4 h-0 md:h-80 border-white md:ml-0 md:mr-6 w-full md:w-0 mt-4 md:mt-0"></div>
        <div className="max-w-xl font-bold text-lg md:text-2xl leading-relaxed text-justify">
          <p>
            An online voting system that will replace the old ballot system or paper system. Over the time we have utilized the required technology in every sector to improve efficiency and save the extra resources. But the voting system is still very expensive and requires a bigger workforce. The system is slower and still not completely tamper-proof. We bring the system that is safe, reliable, and solves the modern issues like higher reachability of the booth, crowd-free voting, inexpensive, faster results, and others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
