import { Icon, IconContainer, IconText } from "./styles/logo";

function Logo() {
   return (
      <IconContainer>
         <IconText>FCC</IconText>
         <Icon className={"fab fa-free-code-camp"} />
      </IconContainer>
   );
}

export default Logo;
