import React from "react";
import styled from "styled-components";

interface drop {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  left: string;
}

const NavDropdown: React.FC<drop> = ({ text, text1, text2, text3, left }) => {
  return (
    <Container left={left}>
      <Wrapper>
        <p>{text}</p>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
      </Wrapper>
    </Container>
  );
};

export default NavDropdown;

const Container = styled.div<{ left: string }>`
  width: 9.5vw;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: absolute;
  top: 70px;
  left: ${({ left }) => left};
  border-radius: 5px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 95%;
  height: 95%;

  p {
    width: 100%;
    text-align: center;
    /* background-color: blueviolet; */
    margin: 0;
    margin-bottom: 15px;
    /* padding: 5px; */
    font-size: 0.9rem;
    opacity: 0.9;
    transition: all ease 0.2s;

    :hover {
      cursor: pointer;
      /* text-decoration: underlineS; */
      border-radius: 2px;
      border-bottom: 1.7px solid black;
    }
  }
`;
