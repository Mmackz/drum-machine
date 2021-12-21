import styled from "styled-components";

export const SwitchContainer = styled.div`
   width: fit-content;

   & > div {
      background: black;
      width: 50px;
      height: 22px;
      position: relative;
      margin: 0 auto;
   }
`;

export const Label = styled.p`
   margin: 0;
   text-align: center;
`;

export const Inner = styled.div`
   position: absolute;
   top: 3.1px;
   left: 3px;
   width: calc(50% - 3px);
   height: 16px;
   background: blue;
   transition: transform 0.15s linear;

   &.on {
      transform: translateX(100%);
   }
`;
