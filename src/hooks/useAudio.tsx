import { useState } from 'react';
import bellStart from '../sounds/bell-start.mp3';
import bellFinish from '../sounds/bell-finish.mp3';

export const useAudio = () => {
  const [muted, setMuted] = useState(false);
  const audioStart = new Audio(bellStart);
  const audioFinish = new Audio(bellFinish);

  const playStart = () => {
    if (!muted) {
      audioStart.play().catch(err => console.log('Audio playback failed:', err));
    }
  };

  const playFinish = () => {
    if (!muted) {
      audioFinish.play().catch(err => console.log('Audio playback failed:', err));
    }
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  return { playStart, playFinish, toggleMute, muted };
};