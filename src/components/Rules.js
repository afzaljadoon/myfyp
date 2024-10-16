import React, { useState } from 'react';

const Rules = ({ onProceed }) => {
  const [isChecked, setIsChecked] = useState(false); // State to track checkbox status

  // Function to handle the "Proceed" button click
  const handleProceed = () => {
    if (isChecked) {
      onProceed(); // Call the onProceed function passed from the parent
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-6">
      <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-5xl text-lg sm:text-xl lg:text-2xl">
        <h1 className="text-base sm:text-lg lg:text-xl font-bold mb-4 mt-4">
          This election is being conducted by the election commission of Pakistan.
        </h1>
        <div className="border border-blue-600 p-4">
          <p className="mb-4">
            You, as being a member of the constituency under the constituencies
            of Khyber Pakhtunkhwa Province Election, are allowed to vote. Please take
            the following steps in order to cast a valid vote. You are requested
            to cast vote on your own decision and not by being pressurized or
            terrorized by someone. If someone threatens you for making a voting
            decision, please contact the given helpline numbers.
          </p>
          <p className="font-semibold">Steps -</p>
          <ul className="list-disc list-inside mb-4">
            <li>Stay in the frame of your camera alone and with sufficient lighting for the entire duration.</li>
            <li>Have Security Keys with you as you would require it to proceed.</li>
            <li>You are allowed to make only one vote per election.</li>
            <li>You are allowed to choose only one candidate per election.</li>
            <li>Candidates information are available on the page.</li>
            <li>Make sure that you are selecting your wanted candidate by confirming the name and symbol on the screen.</li>
            <li>After selecting the candidates, make sure to submit the vote.</li>
            <li>Result will be announced after 5 days of the election being completed.</li>
            <li>You can verify your vote after the election results are announced.</li>
          </ul>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="mr-2"
              id="understand"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)} // Update state when checkbox is clicked
            />
            <label htmlFor="understand" className="text-gray-800">
              I understand and will follow the above steps.
            </label>
          </div>
          <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleProceed} // Call handleProceed on click
              disabled={!isChecked} // Disable button until checkbox is checked
              className={`px-4 py-2 rounded w-full sm:w-auto ${isChecked ? 'bg-blue-600 text-white' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;