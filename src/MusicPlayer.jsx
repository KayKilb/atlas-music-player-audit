import React from 'react';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import Playlist from './components/Playlist';

const MusicPlayer = () => {
  return (
    <div className="music-player flex flex-col md:flex-row justify-center md:justify-between items-start gap-8 p-4 bg-pink-50 h-screen">
      {/* Currently Playing Section */}
      <div className="flex-1 max-w-md md:max-w-lg">
        <CurrentlyPlaying />
      </div>

      {/* Playlist Section */}
      <div className="flex-1 max-w-md md:max-w-lg overflow-y-auto">
        <Playlist />
      </div>
    </div>
  );
};

export default MusicPlayer;
