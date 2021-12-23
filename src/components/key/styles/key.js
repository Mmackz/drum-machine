import styled from "styled-components";

export const Button = styled.span`
   width: calc(13rem / 3);
   height: 3.5rem;
   font-size: 0.8rem;
   display: flex;
   align-items: center;
   justify-content: center;
   background: gray;
   border-radius: 5px;
   box-shadow: 2.5px 3px 4px black;
   cursor: pointer;

   &.pressed {
      border-top: 3px solid #b3b3b3;
      box-shadow: 1px 1px 1px black;
   }

   &.orange {
      background: orange;
      border-top: 3px solid orange;
      box-shadow: 1px 1px 2px orange;
   }
`;