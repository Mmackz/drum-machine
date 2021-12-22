import Key from "../key";
import { Pad } from "./styles/keypad";

function Keypad(props) {
   const { bank } = props;

   return (
      <Pad>
         {bank.map((item) => (
            <Key key={item.keyCode} data={item} />
         ))}
      </Pad>
   );
}

export default Keypad;
