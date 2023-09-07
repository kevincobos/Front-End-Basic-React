import UsingProps from './UsingProps';
import TopText from './TopText';
import BottomText from './BottomText';
import Calculator from './Calculator';
import ListUse from './ListUse';

function Home(){
  return(
    <div >
      <div className='card'>
        <h1>Task: Add three UsingProps </h1>
        <UsingProps textShowTop="message 1" textShowBottom="message 2"/>
        <TopText message="message from top"/>
        <BottomText message="message from bottom"/>
          <div className="card">
            <Calculator />
          </div>
      </div>
      <div className='card'>
        <h1>Task: Add a UseList </h1>
        <ListUse />
      </div>
    </div>
  )
}
export default Home;