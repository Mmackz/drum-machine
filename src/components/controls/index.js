import { Container } from "./styles/controls";

function Controls(props) {
   const { options, setOptions } = props;
   const { powerOn, sound, volume } = options;

   function setVolume({ target }) {
      setOptions((state) => ({ ...state, volume: target.value }));
   }

   return (
      <Container>
         <div className="switch-container">
            <p className="switch-label">Power</p>
            <div className="outer-switch">
               <div className="inner-switch"></div>
            </div>
         </div>

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

         <div className="switch-container">
            <p className="switch-label">Bank</p>
            <div className="outer-switch">
               <div className="inner-switch"></div>
            </div>
         </div>
      </Container>
   );
}

export default Controls;
