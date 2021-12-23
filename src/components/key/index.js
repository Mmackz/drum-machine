import { useEffect } from "react";
import { Button } from "./styles/key";

function Key({ data, state }) {
   const { bank, powerOn, volume } = state.options;
   const { setOptions } = state;
   const keyId = data.name.replaceAll(" ", `${bank ? "-" : "_"}`);
   const keyTrigger = String.fromCharCode(data.keyCode);

   function handleKeypress(event) {
      if (event.key.toUpperCase() === keyTrigger) {
         playSound();
      }
   }

   function playSound() {
      const key = document.getElementById(keyId);
      key && key.classList.add("pressed");
      if (powerOn) {
         const sound = document.getElementById(keyTrigger);
         sound.volume = volume / 100;
         sound.currentTime = 0;
         sound.play();
         key && key.classList.add("orange");
         setOptions((state) => ({ ...state, display: data.name }));
      }
      setTimeout(() => {
         key && key.classList.remove("pressed");
         key && key.classList.remove("orange");
      }, 50);
   }

   useEffect(() => {
      document.addEventListener("keydown", handleKeypress);

      return () => document.removeEventListener("keydown", handleKeypress);
   }, [bank, powerOn, volume, handleKeypress]);

   return (
      <Button onClick={playSound} id={keyId}>
         <audio src={data.url} id={keyTrigger}></audio>
         {keyTrigger}
      </Button>
   );
}

export default Key;
