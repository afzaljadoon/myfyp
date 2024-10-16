import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Announcement = () => {
  const [candidates, setCandidates] = useState([]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    // Retrieve candidates and their votes from localStorage
    const storedCandidates = JSON.parse(localStorage.getItem('candidates')) || [];
    setCandidates(storedCandidates);

    // Find the winner based on the highest votes
    if (storedCandidates.length > 0) {
      const topCandidate = storedCandidates.reduce((max, candidate) =>
        candidate.votes > max.votes ? candidate : max
      );
      setWinner(topCandidate);
    }
  }, []);

  return (
   <div>
    <Header />
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="bg-gray-800 text-white p-6 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Election Results</h1>

        <div className="overflow-auto w-full mb-6">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="text-sm uppercase text-gray-400">
                <th className="py-2">Candidate</th>
                <th className="py-2">Party</th>
                <th className="py-2">Votes</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate, index) => (
                <tr
                  key={index}
                  className={`${
                    winner?.name === candidate.name ? 'bg-green-600' : 'bg-gray-700'
                  } text-white hover:bg-gray-600 transition-all`}
                >
                  <td className="py-2 px-4">{candidate.name}</td>
                  <td className="py-2 px-4">{candidate.party}</td>
                  <td className="py-2 px-4">{candidate.votes || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {winner && (
          <div className="bg-green-600 text-center p-4 rounded-lg shadow-lg mt-6">
            <h2 className="text-xl font-bold mb-2">Winner</h2>
            <p className="text-lg">
              {winner.name} from {winner.party} with {winner.votes} votes!
            </p>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Announcement;
