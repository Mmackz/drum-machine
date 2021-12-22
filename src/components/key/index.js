import { Button } from "./styles/key";

function Key({ data, state }) {
   const { powerOn, volume } = state.options;

   function playSound() {
      if (powerOn) {
         const sound = new Audio(data.url);
         sound.volume = volume / 100;
         sound.play();
      }
   }

   const keyTrigger = String.fromCharCode(data.keyCode);

   return <Button onClick={playSound}>{keyTrigger}</Button>;
}

export default Key;
