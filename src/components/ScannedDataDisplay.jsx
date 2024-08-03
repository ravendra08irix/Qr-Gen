import React from "react";
import { useLocation } from "react-router-dom";

const ScannedDataDisplay = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const data = params.get("data");

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            No Data Available
          </h1>
          <p className="text-gray-600">We couldn't find any data to display.</p>
        </div>
      </div>
    );
  }

  // Split data into lines and format into an array of objects
  const dataLines = data.split("\n").map((line) => {
    const [key, value] = line.split(": ");
    return { key, value };
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 py-12">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
          Personal Info
        </h1>
        <div className="space-y-4">
          {dataLines.map((line, index) => (
            <div key={index} className="relative">
              <label className="block text-gray-700 font-medium mb-1">
                {line.key}
              </label>
              <textarea
                readOnly
                value={line.value || ""}
                className="w-full h-16 bg-gray-100 border border-gray-300 rounded-lg p-3 text-gray-700 resize-none overflow-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScannedDataDisplay;
