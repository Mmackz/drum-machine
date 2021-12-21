import styled from "styled-components";

export const Container = styled.main`
   border: 4px solid orange;
   padding: 1rem;
   position: relative;
   background: #b3b3b3;
   display: flex;
   flex-direction: column;

   @media (min-width: 670px) {
      flex-direction: row;
   }
`;

export const Icon = styled.i`
   font-size: 0.9rem;
   font-weight: bold;
   font-style: italic;
   transform: translateY(2px);
`;

export const IconContainer = styled.div`
   position: absolute;
   top: 0;
   right: 6px;
   font-style: italic;
`;

export const IconText = styled.span`
   font-size: 0.75rem;
   font-weight: bold;
   margin-right: 0.15rem;
`;
