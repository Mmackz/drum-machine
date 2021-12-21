import styled from "styled-components";

export const SwitchContainer = styled.div`
   width: fit-content;

   & > div {
      background: black;
      width: 2.75rem;
      height: 1.275rem;
      position: relative;
      margin: 0 auto;
   }
`;

export const Label = styled.p`
   margin: 0;
   font-size: 0.75rem;
   text-align: center;
`;

export const Inner = styled.div`
   position: absolute;
   top: 0.16rem;
   left: 0.2rem;
   width: calc(50% - 0.2rem);
   height: 0.92rem;
   background: blue;
   transition: transform 0.15s linear;

   &.on {
      transform: translateX(100%);
   }
`;
