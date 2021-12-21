import { useState } from "react";
import styled from 'styled-components'
import Controls from "./components/Controls";
import Keypad from "./components/Keypad";
import { bankOne, bankTwo } from "./drum-sounds";

function App() {
   const [options, setOptions] = useState({
      powerOn: true,
      sound: "",
      volume: 30,
      bank: 0,
   });

   return (
      <div className="container">
         {/* {fcc: icon} */}
         <div className="icon-container">
            <span className="icon-text">FCC</span>
            <i className="icon fab fa-free-code-camp"></i>
         </div>

         {/* {keypad} */}
         <Keypad />
         {/* {control center} */}
         <Controls options={options} setOptions={setOptions} />
      </div>
   );
}

export default App;
