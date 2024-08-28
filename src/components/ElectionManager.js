import React, { useState } from 'react';
// import Addcandidate from './Addcandidate';
// import Candidatedetail from './Candidatedetail';
// import Votingpanel from './Votingpanel';

const ElectionManager = () => {
  const [candidates, setCandidates] = useState([
    {
      name: 'Bapurao',
      party: 'Independent',
      age: 58,
      qualification: 'BA (English Hons.)',
      icon: 'faGlasses',
      votes: 0,
    },
    {
      name: 'Narendra Modi',
      party: 'BJP',
      age: 73,
      qualification: 'M.A (Political Science from Gujarat University.)',
      icon: 'faBroom',
      votes: 0,
    },
    {
      name: 'Rahul Gandhi',
      party: 'Congress',
      age: 52,
      qualification: 'M.Phil (Trinity College, Cambridge in 1995)',
      icon: 'faHandPaper',
      votes: 0,
    },
    {
      name: 'Arvind Kejriwal',
      party: 'AAP',
      age: 56,
      qualification: 'B.S (Mechanical Engineering From The Indian Institute of Technology, Kharagpur)',
      icon: 'faCheck',
      votes: 0,
    },
  ]);

  const addCandidate = (newCandidate) => {
    setCandidates([...candidates, newCandidate]);
  };

  return (
    <div>
      {/* <Addcandidate addCandidate={addCandidate} />
      <Candidatedetail candidates={candidates} />
      <Votingpanel candidates={candidates} /> */}
    </div>
  );
};

export default ElectionManager;
