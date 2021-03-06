import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   
   *,
   *::before,
   *::after {
      box-sizing: border-box;
   }

   html {
      font-size: 16px;
   }

   body {
      display: grid;
      height: 100vh;
      background: #8d8d8d;
      margin: 0;
      font-family: "Russo One", sans-serif;
      place-items: center;
   }

   @media (min-width: 550px) {
      html {
         font-size: 20px;
      }
   }

   @media (min-width: 670px) {
      html {
         font-size: 22px;
      }
   }
`;
