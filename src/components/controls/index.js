import Switch from "../switch";
import { Container } from "./styles/controls";

function Controls(props) {
   const { options, setOptions } = props;
   const { powerOn, sound, volume } = options;

   function setVolume({ target }) {
      setOptions((state) => ({ ...state, volume: target.value }));
   }

   function togglePower() {
      setOptions((state) => ({ ...state, powerOn: !powerOn }));
   }

   return (
      <Container>
         
         <Switch label="Power" 
                 powerOn={powerOn} 
                 togglePower={togglePower} />

         <p className="options-display">{sound}</p>

         <div className="volume-slider">
            <input
               onChange={setVolume}
               type="range"
               min="0"
               max="100"
               value={volume}
               disabled={!powerOn}
            />
         </div>

         <Switch label="Bank" />

      </Container>
   );
}

export default Controls;
