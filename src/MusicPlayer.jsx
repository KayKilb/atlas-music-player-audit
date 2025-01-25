import React from 'react';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import Playlist from './components/Playlist';

const MusicPlayer = () => {
  return (
    <div className="music-player flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-8 p-4">
      {/* Currently Playing Section */}
      <div className="flex-1 max-w-md md:max-w-lg">
        <CurrentlyPlaying />
      </div>

      {/* Playlist Section */}
      <div className="flex-1 max-w-md md:max-w-lg">
        <Playlist />
      </div>
    </div>
  );
};

export default MusicPlayer;
