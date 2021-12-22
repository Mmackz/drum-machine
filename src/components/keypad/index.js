import Key from "../key";
import { Pad } from "./styles/keypad";

function Keypad(props) {
   const { banks, state } = props;

   const bank = banks[state.options.bank];

   return (
      <Pad>
         {bank.map((item) => (
            <Key key={item.keyCode} data={item} state={state} />
         ))}
      </Pad>
   );
}

export default Keypad;
