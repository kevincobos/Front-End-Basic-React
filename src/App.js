import './App.css';
import HelloWorld from './HelloWorld';
import UsingProps from './UsingProps';
import TopText from './TopText';
import BottomText from './BottomText';

function App() {
  //return <HelloWorld />;
  return (    
    <div className='card'>
      <h1>Task: Add three UsingProps </h1>
      <UsingProps textShowTop="message 1" textShowBottom="message 2"/>
      <TopText message="message from top"/>
      <BottomText message="message from bottom"/>
    </div>
  );
};

export default App;
