import React from "react";
import styled from "styled-components";
import right from "../Assets/hp-banner.png";
import learn from "../Assets/learning-path.webp";
import logo from "../Assets/logo.png";
import SponsorCard from "./SponsorCard";

const Company = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Right>
            <img src={right} alt="" />
          </Right>
          <Left>
            <First>
              <img src={logo} alt="" />
            </First>
            <Second>
              <p>
                Have you caught World Cup fever yet? With matches beginning in
                November, excitement is high all around the world. As part of
                the celebrations, Tynker from BYJU’s has teamed up with FIFA to
                promote kids coding in an all new way.
              </p>
              <p>
                When you play a match in BYJU’S Coding Cup, your team runs on
                code that you write! Can you code a smarter soccer team? You’ll
                learn a lot more by practicing and playing and of course —
                scoring! Anyone of any age or skill level can play for free.
                This is a perfect way for your child to start their love of
                coding!
              </p>
            </Second>
            <Third>
              <button>Play Now</button>
              
            </Third>
          </Left>
        </Card>
        <SponsorCard
          Bigtext="The #1 Coding Program for Kids and Teens"
          flex=""
          img={learn}
          text="Tynker powers the creativity of over 60 million students  and serves thousands of schools and educators worldwide."
          text2="Our interactive story-based learning allows kids and teens to learn the basics with easy block-based coding challenges before seamlessly transitioning to real-world text-based languages like JavaScript and Python."
          text3="With 70+ award-winning courses, there’s a learning path for every student, no matter their age or level. We have over 5,000 lessons, backed by hundreds of built-in tutorials, hands-on projects and interactive assessments."
          btnText="EXPLORE CURRICULUM"
          align="center"
        />
      </Wrapper>
    </Container>
  );
};

export default Company;

const Card = styled.div`
  width: 100%;
  display: flex;
  margin-top: 70px;
  margin-bottom: 70px;
`;
const Right = styled.div`
  width: 52%;
  margin: 0px 10px;

  img {
    width: 100%;
    object-fit: contain;
  }
`;
const Left = styled.div`
  width: 48%;
  margin: 0px 10px;
`;
const First = styled.div``;
const Second = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 1.09rem;
    opacity: 0.9;
    margin-bottom: 5px;
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

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;
const Wrapper = styled.div`
  width: 85%;
  background-color: #fff;
  display: flex;
  z-index: 9;
  flex-direction: column;
`;
