import React from 'react';

const electionsData = [
  {
    title: 'Upcoming Elections :',
    elections: [
      { name: 'UP state election:', date: '02-04-2022' },
    ],
  },
  {
    title: 'Other Elections :',
    elections: [
      { name: 'Manipur state Election:', date: '04-04-2022' },
      { name: 'Chhatisgarh state Election:', date: '12-04-2022' },
      { name: 'Bangluru state Election:', date: '20-04-2022' },
      { name: 'Gurgaon Municipal Corporation', date: '26-04-2022' },
    ],
  },
];

const Elections = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <div className="mt-40 w-10/12">
        {electionsData.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-bold mb-4">{section.title}</h2>
            <div className="space-y-8">
              {section.elections.map((election, idx) => (
                <div
                  key={idx}
                  className="bg-gray-700 p-4 rounded flex justify-between items-center"
                >
                  <span>{election.name}</span>
                  <span>{election.date}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Elections;
