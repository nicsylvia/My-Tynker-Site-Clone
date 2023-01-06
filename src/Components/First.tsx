import React from "react";
import styled from "styled-components";
import Top from "../Assets/top.svg";
import Brands from "./Brands";
import Card from "./Card";
import Map from "./Map";
const First = () => {
  return (
    <Container>
      <Image src={Top} />
      <Hold>
        {" "}
        <h1>Why Should Kids and Teens Learn to Code with Tynker?</h1>
        <p>
          Because <span>technology is so integrated</span> into virtually every
          aspect of our lives, learning about it is{" "}
          <span>more important than ever</span>. Our coding platform makes it
          convenient and fun for kids and teens to gain knowledge that will
          serve them well throughout their lives. You can count on our{" "}
          <span>trusted methods </span> to help them develop and grow their
          capabilities with computers.
        </p>
        <p>
          Tynker isn’t just for schools and coding camps, though. Parents who
          value <span>STEM education</span> and want their children to know how
          to code should know that our kids programming platform can be used at
          home, too. Tynker offers a range of solutions with icon-coding for
          pre-readers, block-based coding, and advanced courses in Python,
          JavaScript, data science, art, and image processing. There are
          individual and family home plans, and our online coding classes for
          all ages are an excellent way for them to gain the supplemental STEM
          skills needed for their future.
        </p>
      </Hold>
      <Card />
      <Brands />
      <Map />
    </Container>
  );
};

export default First;

const Container = styled.div`
  width: 100%;
  background-image: linear-gradient(to right, #ebfbfe, #dff2f5);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

const Hold = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
    width: 50vw;
  }
  p {
    font-size: 16px;
    width: 47vw;
    text-align: justify;
    opacity: 0.9;
  }
  span {
    font-weight: bold;
    opacity: 0.9;
  }
`;
