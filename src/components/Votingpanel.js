import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGlasses } from '@fortawesome/free-solid-svg-icons';
import { faBroom, faHandPaper } from '@fortawesome/free-solid-svg-icons';

const candidates = [
  {
    name: 'Bapurao',
    party: 'Independent',
    details: {
      name: 'Bapurao Ganpatrao Apte',
      age: 58,
      party: 'Independent',
      education: 'BA (English Hons.)',
    },
    icon: faGlasses,
  },
  {
    name: 'Narendra Modi',
    party: 'BJP',
    details:{
        name: "Narendra Damodardas Modi",
        age: 73,
        party: "Bharatiya Janta Party",
        education: "M.A (Political Science from Gujarat University.)",
    },
    icon: faBroom,
  },
  {
    name: 'Rahul Gandhi',
    party: 'Congress',
    details:{
        name: "Rahul Rajiv Gandhi",
        age: 52,
        party: "Indian National Congress",
        education: "M.Phil (Trinity College, Cambridge in 1995)",
    },
    icon: faHandPaper,
  },
  {
    name: 'Arvind Kejriwal',
    party: 'AAP',
    details:{
        name: "Arvind Kerjriwal",
        age: 56,
        party: "Aam Aadmi Party",
        education: "B.S (Mechanical Engineering From The Indian Institute of Technology, Kharagpur)",
    },
    icon: faCheck,
  },
];

const VotingPanel = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="bg-gray-800 text-white text-lg sm:text-xl lg:text-2xl p-4 sm:p-6 rounded-sm shadow-md w-full max-w-2xl lg:max-w-3xl">
        <h1 className="text-base sm:text-lg lg:text-xl font-bold mb-4">Voting Panel</h1>
        <div className="mb-8">
          {selectedCandidate && (
            <div className="bg-gray-700 p-4 rounded mb-4">
              <h2 className="font-bold mb-2 flex justify-between">
                <span>{selectedCandidate.name}</span>
                <span>{selectedCandidate.party}</span>
                <FontAwesomeIcon icon={selectedCandidate.icon} size="lg" />
              </h2>
              <p>Name: {selectedCandidate.details.name}</p>
              <p>Age: {selectedCandidate.details.age}</p>
              <p>Party: {selectedCandidate.details.party}</p>
              <p>Education: {selectedCandidate.details.education}</p>
            </div>
          )}
        </div>
        {candidates.map((candidate, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row items-center justify-between p-4 mb-4 rounded cursor-pointer ${
              selectedCandidate?.name === candidate.name
                ? 'bg-blue-700'
                : 'bg-gray-700'
            }`}
            onClick={() => setSelectedCandidate(candidate)}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="candidate"
                className="mr-2"
                checked={selectedCandidate?.name === candidate.name}
                readOnly
              />
              <span>{candidate.name}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center m-2 sm:mt-0">
              <span className="flex items-center md:w-40 md:mr-28 sm:mr-8">{candidate.party}</span>
              <FontAwesomeIcon className='mt-3 md:mt-0' icon={candidate.icon} size="lg" />
            </div>
          </div>
        ))}
        <div className="flex items-center mt-4">
          <input type="checkbox" className="mr-2" />
          <span className="text-gray-400 text-sm sm:text-base">
            I have selected {selectedCandidate?.name} from{' '}
            {selectedCandidate?.party} as my candidate.
          </span>
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-full sm:w-auto"
          disabled={!selectedCandidate}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default VotingPanel;
