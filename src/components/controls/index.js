import { useEffect } from "react";
import Switch from "../switch";
import { Container, Display, VolumeSlider } from "./styles/controls";

function Controls(props) {
   const { options, setOptions } = props.state;
   const { bank, powerOn, display, volume } = options;

   useEffect(() => {
      const delay = display.includes("Power") ? 2000 : 1000;
      const timeout = setTimeout(clearDisplay, delay);

      return () => clearTimeout(timeout);
   }, [display]);

   function clearDisplay() {
      setOptions((state) => ({
         ...state,
         display: /^Power|^Volume/.test(state.display) ? "" : state.display
      }));
   }

   function togglePower() {
      // clearTimeout(timeout)
      setOptions((state) => ({
         ...state,
         powerOn: !powerOn,
         display: powerOn ? "Power Off" : "Power On"
      }));
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
