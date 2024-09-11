import React, { useState, useEffect } from 'react';
import * as Icons from 'react-icons/fa'; // Import all Fa icons

const VotingPanel = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [votingAllowed, setVotingAllowed] = useState(false); // Control whether voting is allowed
  const [timeLeft, setTimeLeft] = useState(null); // Time left for voting

  // Retrieve the candidates and check voting phase when the component mounts
  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem('candidates')) || [];
    setCandidates(storedCandidates);

    const votingPhase = localStorage.getItem('votingPhase');
    const votingEndTime = localStorage.getItem('votingEndTime');

    if (votingPhase === "Voting" && votingEndTime) {
      const timeRemaining = votingEndTime - new Date().getTime();
      if (timeRemaining > 0) {
        setVotingAllowed(true);
        setTimeLeft(timeRemaining);
      }
    }

    const interval = setInterval(() => {
      const endTime = localStorage.getItem('votingEndTime');
      if (endTime) {
        const remaining = endTime - new Date().getTime();
        if (remaining <= 0) {
          setVotingAllowed(false);
          setTimeLeft(null);
        } else {
          setTimeLeft(remaining);
        }
      }
    }, 1000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  // Handle the submit event for the selected vote
  const handleSubmit = () => {
    if (!votingAllowed) {
      alert("Voting is currently closed.");
      return;
    }

    if (selectedCandidate) {
      // Update votes
      const updatedCandidates = candidates.map(candidate => {
        if (candidate.name === selectedCandidate.name) {
          return { ...candidate, votes: (candidate.votes || 0) + 1 };
        }
        return candidate;
      });

      // Save votes to localStorage
      setCandidates(updatedCandidates);
      localStorage.setItem('candidates', JSON.stringify(updatedCandidates));

      // Confirmation
      alert(`Your vote for ${selectedCandidate.name} has been cast.`);

      // Reset selection
      setSelectedCandidate(null);
    } else {
      alert("Please select a candidate before submitting.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="bg-gray-800 text-white p-4 sm:p-6 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-lg font-bold mb-4">Voting Panel</h1>

        {votingAllowed && timeLeft && (
          <div className="text-center mb-4">
            <span>Time left to vote: {Math.floor(timeLeft / 60000)}:{Math.floor((timeLeft % 60000) / 1000)}</span>
          </div>
        )}

        {!votingAllowed && <div className="text-center text-red-500">Voting is closed.</div>}

        {/* Show selected candidate details */}
        {selectedCandidate && (
          <div className="bg-gray-700 p-4 rounded mb-4">
            <h2 className="font-bold mb-2 flex justify-between">
              <span>{selectedCandidate.name}</span>
              <span>{selectedCandidate.party}</span>
              {React.createElement(Icons[selectedCandidate.icon] || Icons.FaUserPlus, { className: 'w-6 h-6' })}
            </h2>
            <p>Age: {selectedCandidate.age}</p>
            <p>Party: {selectedCandidate.party}</p>
            <p>Qualification: {selectedCandidate.qualification}</p>
          </div>
        )}

        {/* List of candidates */}
        {votingAllowed && candidates.map((candidate, index) => (
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
              <span className="whitespace-nowrap">{candidate.name}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center m-2 sm:mb-0">
              {/* Center the party name */}
              <span className="items-center md:w-40 md:mr-24 sm:mr-8 whitespace-nowrap ">{candidate.party}</span>
              {React.createElement(Icons[candidate.icon] || Icons.FaUserPlus, { className: 'mt-2 w-6 h-6' })}
            </div>
          </div>
        ))}

        {/* Checkbox for confirming selection */}
        {votingAllowed && (
          <div className="flex items-center mt-4">
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-400 text-sm sm:text-base">
              I have selected {selectedCandidate?.name} from {selectedCandidate?.party} as my candidate.
            </span>
          </div>
        )}

        {/* Submit Button */}
        {votingAllowed && (
          <div className="mt-6 flex justify-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VotingPanel;
