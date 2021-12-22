import { useState } from "react";
import Controls from "./components/controls";
import Keypad from "./components/keypad";
import Logo from "./components/logo";
import { Container } from "./components/app/styles/app";
import banks from "./data/drum-sounds";

function App() {
   const [options, setOptions] = useState({
      powerOn: true,
      display: "",
      volume: 30,
      bank: 0
   });

   const state = { options, setOptions };

   return (
      <Container>
         <Logo />

         <Keypad banks={banks} state={state} />

         <Controls state={state} />
      </Container>
   );
}

export default App;
