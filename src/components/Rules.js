import React from 'react';

const Rules = () => {
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
            decision please contact the given helpline numbers.
          </p>
          <p className="font-semibold">Steps -</p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Stay in the frame of your camera alone and with sufficient
              lighting for the entire duration.
            </li>
            <li>
              Have Security Keys with you as you would require it to proceed.
            </li>
            <li>You are allowed to make only one vote per election.</li>
            <li>You are allowed to choose only one candidate per election.</li>
            <li>Candidates information are available on the page.</li>
            <li>
              Make sure that you are selecting your wanted candidate by
              confirming the name and symbol on the screen.
            </li>
            <li>
              After selecting the candidates make sure to submit the vote.
            </li>
            <li>
              Result will be announced after 5 days of election being completed.
            </li>
            <li>
              You can verify your vote after the election results are announced.
            </li>
          </ul>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="mr-2"
              id="understand"
            />
            <label htmlFor="understand" className="text-gray-800">
              I understand and will follow above steps.
            </label>
          </div>
          <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded w-full sm:w-auto">
              Cancel
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
