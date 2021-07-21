import styled from "styled-components";
export const StyledComponents = () => {
  return (
    <Containar>
      <Stitle>-- Styled Component --</Stitle>
      <Sbutton>FIGHT!!</Sbutton>
    </Containar>
  );
};
const Containar = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  margin: 8px;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Stitle = styled.p`
  font-weight: bold;
  margin: 10;
  color: #0000ff;
`;
const Sbutton = styled.button`
    background-color: #46cdcf;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 10px;
    &:hover{
      background-color: #46cdcf;
      color:#ff0000;
      cursor:pointer;
    `;
