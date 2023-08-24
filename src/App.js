import './App.css';
import UsingProps from './UsingProps';
import TopText from './TopText';
import BottomText from './BottomText';
import Calculator from './Calculator';

import ReactPlayer from 'react-player';

import Home from './Home';
import About from './About';
import {Routes, Route, Link} from 'react-router-dom';
import AWS_CSA from './AWS_CSA';

function App() {
  //return <HelloWorld />;
  const videoUrl = "https://www.youtube.com/watch?v=rNWaLeZ5TV0";
  return (    
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/AWS_CSA" className="nav-item">AWS</Link>
        <Link to="/about" className="nav-item">About</Link>
      </nav>
      <h1>React player</h1>
      <ReactPlayer 
        url={videoUrl}
        playing={true}
        volume={0.5}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AWS_CSA" element={<AWS_CSA />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <div className='card'>
        <h1>Task: Add three UsingProps </h1>
        <UsingProps textShowTop="message 1" textShowBottom="message 2"/>
        <TopText message="message from top"/>
        <BottomText message="message from bottom"/>
        <div className="card">
          <Calculator />
        </div>
      </div>
    </div>
  );
};

export default App;
