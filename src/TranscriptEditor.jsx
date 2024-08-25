import React, { useState, useEffect, useRef } from 'react';

const TranscriptEditor = ({ initialTranscript }) => {
  const [transcript, setTranscript] = useState(initialTranscript);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(null);
  const [editingWordIndex, setEditingWordIndex] = useState(null);
  const [editingWord, setEditingWord] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const currentWord = transcript[currentWordIndex];
      const nextWordIndex = currentWordIndex + 1;

      if (nextWordIndex < transcript.length) {
        const nextWord = transcript[nextWordIndex];
        const delay = nextWord.start_time - currentWord.start_time;

        timeoutRef.current = setTimeout(() => {
          setCurrentWordIndex(nextWordIndex);
          setCurrentTime(nextWord.start_time);
        }, delay);
      } else {
        setIsPlaying(false);
        setCurrentWordIndex(null);
      }
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [isPlaying, currentWordIndex, transcript]);

  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      setCurrentWordIndex(0);
      setCurrentTime(transcript[0].start_time);
    }
  };

  const handleWordSelect = (index) => {
    setEditingWordIndex(index);
    setEditingWord(transcript[index].word);
  };

  const handleWordEdit = (newWord) => {
    setEditingWord(newWord);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      if (editingWord.trim() !== '') {
        const updatedTranscript = [...transcript];
        updatedTranscript[index] = { ...updatedTranscript[index], word: editingWord.trim() };
        setTranscript(updatedTranscript);
      }
      setEditingWordIndex(null);
      setEditingWord('');
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center font-sans">
      <div className="max-w-2xl w-full p-8 rounded-lg shadow-lg bg-gray-800">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">Transcript Editor</h1>
        <div className="mb-8 flex justify-between items-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={handlePlay}
            disabled={isPlaying}
          >
            {isPlaying ? 'Playing...' : 'Play'}
          </button>
          <div className="text-xl text-white font-mono">{formatTime(currentTime)}</div>
        </div>
        <div className="text-lg text-gray-300 leading-relaxed">
          {transcript.map((wordObj, index) => (
            <span
              key={index}
              className={`cursor-pointer transition duration-300 ease-in-out ${
                currentWordIndex === index ? 'text-blue-400 font-bold' : ''
              }`}
              onClick={() => handleWordSelect(index)}
            >
              {editingWordIndex === index ? (
                <input
                  type="text"
                  value={editingWord}
                  onChange={(e) => handleWordEdit(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="bg-transparent text-white outline-none border-2 rounded px-1 focus:border-blue-400 focus:shadow-[0_0_10px_#60A5FA]"
                  style={{ width: `${editingWord.length * 0.6 + 1}em` }}
                  autoFocus
                />
              ) : (
                `${wordObj.word} `
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TranscriptEditor;