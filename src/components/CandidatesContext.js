import React, { createContext, useState } from 'react';

export const CandidatesContext = createContext();

export const CandidatesProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([
    {
      name: 'Bapurao',
      party: 'Independent',
      age: 58,
      qualification: 'BA (English Hons.)',
      icon: 'FaGlasses',
      votes: 0,
    },
    {
      name: 'Narendra Modi',
      party: 'BJP',
      age: 73,
      qualification: 'M.A (Political Science from Gujarat University.)',
      icon: 'FaBroom',
      votes: 0,
    },
    {
      name: "Rahul Rajiv Gandhi",
      party: "Indian National Congress",
      age: 52,
      qualification: "M.Phil (Trinity College, Cambridge in 1995)",
      icon: "FaHandPaper",
      votes: 0,
  },
  {
    name: "Arvind Kerjriwal",
    party: "Aam Aadmi Party",
    age: 56,
    qualification: "B.S (Mechanical Engineering From The Indian Institute of Technology, Kharagpur)",
    icon: "FaCheck",
    votes: 0,
}
    // Additional candidates...
  ]);

  const addCandidate = (newCandidate) => {
    setCandidates([...candidates, newCandidate]);
  };

  return (
    <CandidatesContext.Provider value={{ candidates, addCandidate }}>
      {children}
    </CandidatesContext.Provider>
  );
};
