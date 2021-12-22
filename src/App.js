import { useState } from "react";
import Controls from "./components/controls";
import Keypad from "./components/keypad";
import Logo from "./components/logo";
import { Container } from "./components/app/styles/app";
import { bank_0, bank_1 } from "./media/drum-sounds";

function App() {
   const [options, setOptions] = useState({
      powerOn: true,
      sound: "",
      volume: 30,
      bank: 0,
   });

   return (
      <Container>
         <Logo />

         <Keypad bank={options.bank ? bank_1 : bank_0} />

         <Controls options={options} setOptions={setOptions} />
      </Container>
   );
}

export default App;
