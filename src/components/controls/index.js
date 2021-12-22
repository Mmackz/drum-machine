import Switch from "../switch";
import { Container, Display, VolumeSlider } from "./styles/controls";

function Controls(props) {
   const { options, setOptions } = props.state;
   const { bank, powerOn, sound, volume } = options;
   const { banks } = props;

   function setVolume({ target }) {
      powerOn && setOptions((state) => ({ ...state, volume: target.value }));
   }

   function togglePower() {
      setOptions((state) => ({ ...state, powerOn: !powerOn, sound: "" }));
   }

   function toggleBank() {
      if (powerOn) {
         const index = banks[bank].findIndex((item) => item.name === sound);
         const newSound = index >= 0 ? banks[bank ? 0 : 1][index].name : "";
         setOptions((state) => ({
            ...state,
            bank: state.bank ? 0 : 1,
            sound: newSound,
         }));
      }
   }

   return (
      <Container>
         <Switch label="Power" switchPosition={powerOn} toggle={togglePower} />

         <Display>{sound}</Display>

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
