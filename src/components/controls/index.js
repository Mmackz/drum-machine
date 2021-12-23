import { useEffect } from "react";
import Switch from "../switch";
import { Container, Display, VolumeSlider } from "./styles/controls";

function Controls(props) {
   const { options, setOptions } = props.state;
   const { bank, powerOn, display, volume } = options;

   useEffect(() => {
      function clearDisplay() {
         setOptions((state) => ({
            ...state,
            display: /^Power|^Volume/.test(state.display) ? "" : state.display
         }));
      }
      const delay = display.includes("Power") ? 2000 : 1000;
      const timeout = setTimeout(clearDisplay, delay);
      return () => clearTimeout(timeout);
   }, [powerOn, display, setOptions]);

   function togglePower() {
      setOptions((state) => ({
         ...state,
         powerOn: !powerOn,
         display: powerOn ? "Power Off" : "Power On"
      }));
      powerOn &&
         setTimeout(
            () => setOptions((state) => ({ ...state, display: "" })),
            250
         );
   }

   function toggleBank() {
      if (powerOn) {
         setOptions((state) => ({
            ...state,
            bank: state.bank ? 0 : 1,
            display: state.bank ? "Heater Kit" : "Smooth Piano Kit"
         }));
      }
   }

   function setVolume({ target }) {
      if (powerOn) {
         setOptions((state) => ({
            ...state,
            display: `Volume: ${target.value}`,
            volume: target.value
         }));
      }
   }

   return (
      <Container>
         <Switch label="Power" switchPosition={powerOn} toggle={togglePower} />

         <Display>{display}</Display>

         <VolumeSlider
            onChange={setVolume}
            type="range"
            min="0"
            max="100"
            value={volume}
            disabled={!powerOn}
         />

         <Switch label="Bank" switchPosition={bank} toggle={toggleBank} />
      </Container>
   );
}

export default Controls;
