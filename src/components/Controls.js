function Controls(props) {
   const { options, setOptions } = props;
   const { sound, volume } = options

   function setVolume({ target }) {
      setOptions(state => ({...state, volume: target.value}))
   }

   return (
      <div className="options-container">
         <div class="switch-container">
            <p class="switch-label">Power</p>
            <div class="outer-switch">
               <div class="inner-switch"></div>
            </div>
         </div>
         <p className="options-display">{sound}</p>
         <div class="volume-slider">
            <input onChange={setVolume} type="range" min="0" max="100" value={volume} />    
         </div>
      </div>
   );
}

export default Controls;
