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

