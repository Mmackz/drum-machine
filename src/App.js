import Controls from "./components/Controls";
import Keypad from "./components/Keypad"
import { bankOne, bankTwo } from "./drum-sounds";

function App() {
   return (
      <div className="container">
         {/* {fcc: icon} */}
         {/* {keypad} */}
         <Keypad />
         {/* {control center} */}
         <Controls />
      </div>
   );
}

export default App;
