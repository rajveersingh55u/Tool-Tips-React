
import { useState } from 'react';
import './App.css';
import ToolTip from './components/ToolTip';


function App() {
  //using state to set the selected button
  const [selectedButton, setSelectedButton] = useState('top');
  //using state to set and get the position of the tip
  const [position, setPosition] = useState('top');

  //function called when position button is clicked

  function handleButtonClick(event) {
    //getting the position of the toolpit from the buttons
    setPosition(prevPostion => {
      return prevPostion = event.target.value;
    })
    //making the button selected
    setSelectedButton(event.target.value);
  }


  return (
    <div className="container">
      <h2 className='h2'>ToolTip -- Using React</h2>
      <p className='p1'>Click Cursor on Hower  Button and to see the ToolTip in your specied direction</p>
      {/* button to set the position of the tooltip */}
      <div className='button-container'>
        <button onClick={handleButtonClick} value="left" className={selectedButton === "left" ? "selected" : ""}>Left</button>
        <button onClick={handleButtonClick} value="right" className={selectedButton === "right" ? "selected" : ""}>Right</button>
        <button onClick={handleButtonClick} value="top" className={selectedButton === "top" ? "selected" : ""}>Top</button>
        <button onClick={handleButtonClick} value="bottom" className={selectedButton === "bottom" ? "selected" : ""}>Bottom</button>
      </div>


      {/* when hovered over this button the tip will be displayed */}
      <ToolTip position={position} />
    </div>
  );
}

export default App;