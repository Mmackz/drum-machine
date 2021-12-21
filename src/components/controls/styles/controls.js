import styled from "styled-components";

export const Container = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 0.75rem 0.4rem;
`;

export const Display = styled.p`
   width: 8.5rem;
   height: 2.25rem;
   font-size: 0.8rem;
   background: gray;
   margin-bottom: 0;
   border-radius: 2px;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const VolumeSlider = styled.input`
   height: 2.5rem;
   -webkit-appearance: none;
   background: inherit;
   margin: 0.25rem 0;
   width: 11rem;

   &:focus {
      outline: none;
   }
   &::-webkit-slider-runnable-track {
      width: 100%;
      height: 0.25rem;
      cursor: pointer;
      box-shadow: 1px 1px 2px #000000;
      background: #3a3a3a;
      border-radius: 1.5px;
      border: 1px solid #000000;
   }
   &::-webkit-slider-thumb {
      box-shadow: 1px 1px 2px #000000;
      border: 0px solid #000000;
      height: 1.2rem;
      width: 0.275rem;
      border-radius: 1px;
      background: #0000ff;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -0.55rem;
   }
   &:focus::-webkit-slider-runnable-track {
      background: #4a4a4a;
   }
   &::-moz-range-track {
      width: 100%;
      height: 0.25rem;
      cursor: pointer;
      box-shadow: 1px 1px 2px #000000;
      background: #4a4a4a;
      border-radius: 1.5px;
      border: 1px solid #000000;
   }
   &::-moz-range-thumb {
      box-shadow: 1px 1px 2px #000000;
      border: 0px solid #000000;
      height: 1.2rem;
      width: 0.275rem;
      border-radius: 1px;
      background: #0000ff;
      cursor: pointer;
   }
   &::-ms-track {
      width: 100%;
      height: 0.25rem;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      color: transparent;
   }
   &::-ms-fill-lower {
      background: #4a4a4a;
      border: 1px solid #000000;
      border-radius: 6px;
      box-shadow: 1px 1px 2px #000000;
   }
   &::-ms-fill-upper {
      background: #4a4a4a;
      border: 1px solid #000000;
      border-radius: 6px;
      box-shadow: 1px 1px 2px #000000;
   }
   &::-ms-thumb {
      margin-top: 1px;
      box-shadow: 1px 1px 2px #000000;
      border: 0px solid #000000;
      height: 1.2rem;
      width: 0.275rem;
      border-radius: 1px;
      background: #0000ff;
      cursor: pointer;
   }
   &:focus::-ms-fill-lower {
      background: #4a4a4a;
   }
   &:focus::-ms-fill-upper {
      background: #4a4a4a;
   }
`;
