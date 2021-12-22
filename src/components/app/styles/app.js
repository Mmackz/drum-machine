import styled from "styled-components";

export const Container = styled.main`
   border: 4px solid orange;
   padding: 1.25rem;
   min-width: 340px;
   width: 65vw;
   position: relative;
   background: #b3b3b3;
   display: flex;
   flex-direction: column;
   gap: 2.5rem;

   @media (min-width: 670px) {
      flex-direction: row;
      width: 660px;
      gap: 1.3rem;
   }
`;
