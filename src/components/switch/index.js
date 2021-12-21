import { Inner, Label, SwitchContainer } from "./styles/switch"

function Switch(props) {

   const { label, powerOn, togglePower } = props

   return (
      <SwitchContainer>
         <Label>{label}</Label>
         <div onClick={togglePower} >
            <Inner className={powerOn && "on"} />
         </div>
      </SwitchContainer>
   );
}

export default Switch;
