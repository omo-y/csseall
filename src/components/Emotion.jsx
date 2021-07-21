/**@jsxRuntime classic */
/** @jsx jsx */
import {jsx,css} from "@emotion/react"
import styled from "@emotion/styled"
export const Emotion = () => {
  const containarStyle =css`
  border: solid 2px #392eff;
   border-radius: 10px;
   margin: 10px;
   padding: 30px;
   display: flex;
       justify-content: space-around;
   align-items: center;
   `;
   const title=css`
   font-weight:bold;
  margin: 0;
  color: #ff0000;
  `;
  return (
    <div css={containarStyle}>
      <p css={title}>-- Emotion --</p>
      <SButton>Fight!!</SButton>
    </div>
  );
};
const SButton =styled.button`
background-color: #000000;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 8px;
  font-weight:bold;
  &:hover{
    background-color: #46cdcf;
    color:#ff0000;
    cursor:pointer;
    `;
