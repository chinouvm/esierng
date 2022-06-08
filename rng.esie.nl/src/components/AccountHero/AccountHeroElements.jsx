import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: #202020;
`;
export const CardContainer = styled.div`
  border: solid 2px;
  padding: 30px 50px 30px 50px;
  border-radius: 15px;
  background: white;
  width: 30%;
`;
export const ItemWrap = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
`;
export const Text = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`;
export const Header = styled.h1`
  background: white;
`;
export const Subheader = styled.p`
  background: white;
`;
export const Generation = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PassHeader = styled.h1`
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 10px 20px 10px 20px;
  background-color: #929292;
  width: 80%;
  height: 50px;
  overflow: hidden;
  white-space: nowrap;
  overflow-x: scroll;
`;
export const Button = styled.button`
  background: #459cff;
  border: 2px solid #459cff;
  border-radius: 20px;
  padding: 10px 20px 10px 20px;
  font-size: 1em;
  color: #fff;
  transition: ease-in-out 0.2ms;
  margin-left: 10px;

  &:hover {
    background: #72b3fe;
    border: 2px solid #72b3fe;
    cursor: pointer;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;
