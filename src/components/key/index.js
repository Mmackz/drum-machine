import { Button } from "./styles/key";

function Key({ data, state }) {
   const { powerOn, volume } = state.options;
   const { setOptions } = state;
   const keyTrigger = String.fromCharCode(data.keyCode);

   function playSound() {
      if (powerOn) {
         const sound = document.getElementById(keyTrigger);
         sound.volume = volume / 100;
         sound.currentTime = 0;
         sound.play();
         setOptions(state => ({...state, sound: data.name}))
      }
   }

   return (
      <Button onClick={playSound}>
         <audio src={data.url} id={keyTrigger}></audio>
         {keyTrigger}
      </Button>
   );
}

export default Key;
