import { useState } from "react";
import Controls from "./components/controls";
import Keypad from "./components/Keypad";
import { Container, Icon, IconText, IconContainer } from "./components/app/styles/app";
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

         <IconContainer>
            <IconText>FCC</IconText>
            <Icon className={"fab fa-free-code-camp"} />
         </IconContainer>

         <Keypad />

         <Controls options={options} setOptions={setOptions} />

      </Container>
   );
}

export default App;
