import { useState } from "react";
import Controls from "./components/controls";
import Keypad from "./components/Keypad";
import { Container } from "./components/app/styles/app";
import { bankOne, bankTwo } from "./drum-sounds";

function App() {
   const [options, setOptions] = useState({
      powerOn: true,
      sound: "",
      volume: 30,
      bank: 0,
   });

   return (
      <Container>
         {/* {fcc: icon} */}
         <div className="icon-container">
            <span className="icon-text">FCC</span>
            <i className="icon fab fa-free-code-camp"></i>
         </div>

         {/* {keypad} */}
         <Keypad />
         {/* {control center} */}
         <Controls options={options} setOptions={setOptions} />
      </Container>
   );
}

export default App;
