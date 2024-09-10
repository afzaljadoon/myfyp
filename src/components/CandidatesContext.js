// import React, { useState } from 'react';
// import VotingPanel from './VotingPanel';
// import CandidateDetail from './CandidateDetail';

// const CandidateManagement = () => {
//   const [candidates, setCandidates] = useState([
//     {
//       name: 'Bapurao',
//       party: 'Independent',
//       details: {
//         name: 'Bapurao Ganpatrao Apte',
//         age: 58,
//         party: 'Independent',
//         education: 'BA (English Hons.)',
//       },
//       icon: 'faGlasses',
//     },
//     {
//       name: 'Narendra Modi',
//       party: 'BJP',
//       details: {
//         name: 'Narendra Damodardas Modi',
//         age: 73,
//         party: 'Bharatiya Janta Party',
//         education: 'M.A (Political Science from Gujarat University.)',
//       },
//       icon: 'faBroom',
//     },
//     {
//       name: 'Rahul Gandhi',
//       party: 'Congress',
//       details: {
//         name: 'Rahul Rajiv Gandhi',
//         age: 52,
//         party: 'Indian National Congress',
//         education: 'M.Phil (Trinity College, Cambridge in 1995)',
//       },
//       icon: 'faHandPaper',
//     },
//     {
//       name: 'Arvind Kejriwal',
//       party: 'AAP',
//       details: {
//         name: 'Arvind Kerjriwal',
//         age: 56,
//         party: 'Aam Aadmi Party',
//         education: 'B.S (Mechanical Engineering From The Indian Institute of Technology, Kharagpur)',
//       },
//       icon: 'faCheck',
//     },
//   ]);
//   const [selectedCandidate, setSelectedCandidate] = useState(null);

//   // Function to add a new candidate
//   const addCandidate = (newCandidate) => {
//     setCandidates([...candidates, newCandidate]);
//   };

//   // Function to edit an existing candidate
//   const editCandidate = (updatedCandidate) => {
//     setCandidates(
//       candidates.map((candidate) =>
//         candidate.name === updatedCandidate.name ? updatedCandidate : candidate
//       )
//     );
//   };

//   // Function to delete a candidate
//   const deleteCandidate = (name) => {
//     setCandidates(candidates.filter((candidate) => candidate.name !== name));
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <VotingPanel
//         candidates={candidates}
//         selectedCandidate={selectedCandidate}
//         setSelectedCandidate={setSelectedCandidate}
//       />
//       <CandidateDetail
//         candidates={candidates}
//         addCandidate={addCandidate}
//         editCandidate={editCandidate}
//         deleteCandidate={deleteCandidate}
//       />
//     </div>
//   );
// };

// export default CandidateManagement;
