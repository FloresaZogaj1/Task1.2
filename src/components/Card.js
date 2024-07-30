import React from 'react';

const Card = ({ version, date, label, labelColor, author, authorImage, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 ml-z">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500">{version} ({date})</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className={`text-white px-8 py-1 rounded-lg`} style={{ backgroundColor: labelColor }}>{label}</span>
          <div className="flex items-center ml-10"> 
            <img
              className="w-6 h-6 rounded-full mr-2"
              src={authorImage}
              alt={author}
            />
            <span className="text-gray-900">{author}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-base mb-4 whitespace-pre-line">{description}</p>
      <button className="bg-white text-indigo-500 border border-indigo-500 px-4 py-2 rounded-lg">
        Download
      </button>
    </div>
  );
};

export default Card;
