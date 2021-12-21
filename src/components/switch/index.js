import { Inner, Label, SwitchContainer } from "./styles/switch"

function Switch(props) {

   const { label, switchPosition, toggle } = props

   return (
      <SwitchContainer>
         <Label>{label}</Label>
         <div onClick={toggle} >
            <Inner className={switchPosition && "on"} />
         </div>
      </SwitchContainer>
   );
}

export default Switch;
