import React from 'react';
import TranscriptEditor from './TranscriptEditor';

const initialTranscript = [
  { word: 'Imagine', start_time: 0, duration: 1000 },
  { word: 'there\'s', start_time: 1000, duration: 500 },
  { word: 'no', start_time: 1500, duration: 500 },
  { word: 'heaven', start_time: 2000, duration: 1000 },
  { word: 'It\'s', start_time: 3500, duration: 500 },
  { word: 'easy', start_time: 4000, duration: 1000 },
  { word: 'if', start_time: 5000, duration: 500 },
  { word: 'you', start_time: 5500, duration: 500 },
  { word: 'try', start_time: 6000, duration: 1000 },
  { word: 'No', start_time: 7500, duration: 500 },
  { word: 'hell', start_time: 8000, duration: 1000 },
  { word: 'below', start_time: 9000, duration: 1000 },
  { word: 'us', start_time: 10000, duration: 500 },
  { word: 'Above', start_time: 11000, duration: 1000 },
  { word: 'us,', start_time: 12000, duration: 500 },
  { word: 'only', start_time: 12500, duration: 1000 },
  { word: 'sky', start_time: 13500, duration: 1000 },
  { word: 'Imagine', start_time: 15000, duration: 1000 },
  { word: 'all', start_time: 16000, duration: 500 },
  { word: 'the', start_time: 16500, duration: 500 },
  { word: 'people', start_time: 17000, duration: 1000 },
  { word: 'Living', start_time: 18500, duration: 1000 },
  { word: 'for', start_time: 19500, duration: 500 },
  { word: 'today', start_time: 20000, duration: 1500 },
  { word: 'Imagine', start_time: 22000, duration: 1000 },
  { word: 'there\'s', start_time: 23000, duration: 500 },
  { word: 'no', start_time: 23500, duration: 500 },
  { word: 'countries', start_time: 24000, duration: 1500 },
  { word: 'It', start_time: 26000, duration: 500 },
  { word: 'isn\'t', start_time: 26500, duration: 500 },
  { word: 'hard', start_time: 27000, duration: 500 },
  { word: 'to', start_time: 27500, duration: 500 },
  { word: 'do', start_time: 28000, duration: 1000 },
  { word: 'Nothing', start_time: 29500, duration: 1000 },
  { word: 'to', start_time: 30500, duration: 500 },
  { word: 'kill', start_time: 31000, duration: 500 },
  { word: 'or', start_time: 31500, duration: 500 },
  { word: 'die', start_time: 32000, duration: 500 },
  { word: 'for', start_time: 32500, duration: 1000 },
  { word: 'And', start_time: 34000, duration: 500 },
  { word: 'no', start_time: 34500, duration: 500 },
  { word: 'religion', start_time: 35000, duration: 1500 },
  { word: 'too', start_time: 36500, duration: 1500 },
];

function App() {
  return (
    <div className="App">
      <TranscriptEditor initialTranscript={initialTranscript} />
    </div>
  );
}

export default App;