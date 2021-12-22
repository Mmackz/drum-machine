import { Button } from "./styles/key";

function Key({ data }) {
   return <Button>{String.fromCharCode(data.keyCode)}</Button>;
}

export default Key;
