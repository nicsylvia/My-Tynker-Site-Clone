import React from "react";
import styled from "styled-components";

interface cardProps {
  flex: string;
  Bigtext: string;
  text: string;
  text2: string;
  text3: string;
  img: string;
  btnText: string;
  align: string;
}

const SponsorCard: React.FC<cardProps> = ({
  flex,
  Bigtext,
  text,
  text2,
  text3,
  img,
  btnText,
  align,
}) => {
  return (
    <Container>
      <Card flex={flex}>
        <Right align={align}>
          <img src={img} alt="" />
        </Right>
        <Left>
          <First>
            <h1>{Bigtext}</h1>
          </First>
          <Second>
            <p>{text}</p>
            <p>{text2}</p>
            <p>{text3}</p>
          </Second>
          <Third>
            <button>{btnText}</button>
          </Third>
        </Left>
      </Card>
    </Container>
  );
};

export default SponsorCard;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div<{ flex: string }>`
  width: 100%;
  display: flex;
  flex-direction: ${({ flex }) => (flex ? "row" : "row-reverse")};
`;
const Right = styled.div<{ align: string }>`
  width: 40%;
  margin: 0px 10px;
  display: flex;
  align-items: ${({ align }) => align};
  /* background-color: #4b6e8c; */

  img {
    width: 100%;
    height: 70%;
    object-fit: contain;
  }
`;
const Left = styled.div`
  width: 50%;
  margin: 0px 10px;
  /* background: olive; */
`;
const First = styled.div`
  h1 {
    line-height: 2rem;
    margin: 0;
  }
`;
const Second = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  p {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 2px;
  }
`;
const Third = styled.div`
  margin-top: 20px;

  button {
    padding: 15px 20px;
    background-color: #fd7f00;
    border: none;
    color: #fff;
    font-weight: 600;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 1rem;
    transition: all ease-in 0.2s;

    :hover {
      background-color: #ea7703;

      cursor: pointer;
    }
  }
`;
