import Switch from "../switch";
import { Container, VolumeSlider } from "./styles/controls";

function Controls(props) {
   const { options, setOptions } = props;
   const { bank, powerOn, sound, volume } = options;

   function setVolume({ target }) {
      powerOn && setOptions((state) => ({ ...state, volume: target.value }));
   }

   function togglePower() {
      setOptions((state) => ({ ...state, powerOn: !powerOn }));
   }

   function toggleBank() {
      powerOn && setOptions((state) => ({...state, bank: state.bank ? 0 : 1}))
   }

   return (
      <Container>
         
         <Switch label="Power" 
                 switchPosition={powerOn} 
                 toggle={togglePower} />

         <p className="options-display">{sound}</p>
   
         <VolumeSlider
            onChange={setVolume}
            type="range"
            min="0"
            max="100"
            value={volume}
            disabled={!powerOn}
         />
         
         <Switch label="Bank" 
                 switchPosition={bank} 
                 toggle={toggleBank} />

      </Container>
   );
}

export default Controls;
