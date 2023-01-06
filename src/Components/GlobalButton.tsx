import React from "react";
import styled from "styled-components";

interface btnProps {
  text: string;
  bg: string;
  border: string;
  hov: string;
}
const GlobalButton: React.FC<btnProps> = ({ text, bg, border, hov }) => {
  return (
    <Container>
      <Button bg={bg} border={border} hov={hov}>
        {text}
      </Button>
    </Container>
  );
};

export default GlobalButton;

const Container = styled.div``;
const Button = styled.div<{ bg: string; border: string; hov: string }>`
  padding: 10px 20px;
  background-color: ${({ bg }) => bg};
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 5px;
  text-transform: uppercase;
  margin-right: 15px;
  border: ${({ border }) => (border ? "1px solid white" : "none")};
  transition: all ease-in-out 0.2s;

  :hover {
    cursor: pointer;
    background-color: ${({ hov }) => hov};
  }
`;
