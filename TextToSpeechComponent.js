import React from 'react';
import TTS from 'react-speech';

function TextToSpeechComponent() {
  const [text, setText] = useState('');

  const speak = () => {
    TTS.speak(text);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={speak}>Speak</button>
    </div>
  );
};

export default TextToSpeechComponent;