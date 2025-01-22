// PlayListItem.jsx
import React from 'react';

const PlayListItem = ({ title, artist, length }) => {
  return (
    <div className="playlist-item p-4 flex justify-between items-center bg-white hover:bg-gray-100 rounded-lg shadow-sm">
      <div className="text-left">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{artist}</p>
      </div>
      <span className="text-sm text-gray-500">{length}</span>
    </div>
  );
};

export default PlayListItem;