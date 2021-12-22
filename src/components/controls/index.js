import Switch from "../switch";
import { Container, Display, VolumeSlider } from "./styles/controls";

function Controls(props) {
   const { options, setOptions } = props.state;
   const { bank, powerOn, display, volume } = options;

   function setVolume({ target }) {
      powerOn && setOptions((state) => ({ ...state, volume: target.value }));
   }

   function togglePower() {
      setOptions((state) => ({
         ...state,
         powerOn: !powerOn,
         display: powerOn ? "Power Off" : "Power On",
      }));
      setTimeout(
         () =>
            setOptions((state) => {
               if (state.display.includes("Power")) {
                  return { ...state, display: "" };
               }
            }),
         2000
      );
   }

   function toggleBank() {
      if (powerOn) {
         setOptions((state) => ({
            ...state,
            bank: state.bank ? 0 : 1,
            display: state.bank ? "Heater Kit" : "Smooth Piano Kit",
         }));
      }
   }

   return (
      <Container>
         <Switch label="Power" switchPosition={powerOn} toggle={togglePower} />

         <Display>{display}</Display>

         <VolumeSlider onChange={setVolume} type="range" min="0" max="100" value={volume} disabled={!powerOn} />

         <Switch label="Bank" switchPosition={bank} toggle={toggleBank} />
      </Container>
   );
}

export default Controls;
