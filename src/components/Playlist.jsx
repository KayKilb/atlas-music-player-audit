// Playlist.jsx
import React from 'react';
import PlayListItem from './PlayListItem';

const playlistItems = [
  { title: "Pink Pony Club", artist: "Chappell Roan", length: "3:58" },
  { title: "Casual", artist: "Chappell Roan", length: "4:07" },
  { title: "Naked in Manhattan", artist: "Chappell Roan", length: "3:35" },
  { title: "Red Wine Supernova", artist: "Chappell Roan", length: "3:48" },
  { title: "Love Me Anyway", artist: "Chappell Roan", length: "4:10" },
  { title: "My Kink is Karma", artist: "Chappell Roan", length: "3:57" },
  { title: "Femininomenon", artist: "Chappell Roan", length: "2:54" },
  { title: "California", artist: "Chappell Roan", length: "3:12" },
  { title: "Hot To Go!", artist: "Chappell Roan", length: "2:45" },
  { title: "Kaleidoscope", artist: "Chappell Roan", length: "3:28" },
];

const Playlist = () => {
  return (
    <div className="playlist space-y-2 p-4 bg-pink-50">
      {playlistItems.map((item, index) => (
        <PlayListItem
          key={index}
          title={item.title}
          artist={item.artist}
          length={item.length}
        />
      ))}
    </div>
  );
};

export default Playlist;
