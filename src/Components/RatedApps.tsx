import React from "react";
import styled from "styled-components";
import Botbg from "../Assets/eduwaveTop.svg";
import pic from "../Assets/graphic-mobile.webp";
import app from "../Assets/app.webp";
import mod from "../Assets/mod.webp";
import jnr from "../Assets/junior.webp";

const RatedApps = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <h1>3 Highly-Rated Mobile Apps for Learning Code</h1>
          <p>Download Tynker apps and learn to code on the go.</p>
          <button>LEARN MORE</button>
        </Top>
        <Bottom>
          <Right>
            <img src={pic} alt="" />
          </Right>
          <Left>
            <Nav>
              <Icon>
                <img src={jnr} alt="" />
              </Icon>
              <Text>
                <Title>
                  <h1>Tynker Junior</h1>
                </Title>
                <Desc>
                  <p>
                    Tap-Tap picture coding with voice-overs. Pre-readers solve
                    story-based puzzles and build their first programs in coding
                    sandboxes. Ages 5-7
                  </p>
                </Desc>
                <Review>
                  {" "}
                  <Star></Star>
                  <Num>
                    {" "}
                    <p>4.5</p>
                  </Num>
                  <Revs>
                    <p>2,200+ reviews</p>
                  </Revs>
                </Review>
              </Text>
            </Nav>
            <Nav>
              <Icon>
                <img src={app} alt="" />
              </Icon>
              <Text>
                <Title>
                  <h1>Tynker</h1>
                </Title>
                <Desc>
                  <p>
                    Drag-and-drop block coding with a full-featured workshop.
                    Build games and apps, compose music and art, control smart
                    devices, and much, much more. Ages 7-12
                  </p>
                </Desc>
                <Review>
                  <Star></Star>
                  <Num>
                    {" "}
                    <p>4.7</p>
                  </Num>
                  <Revs>
                    <p>10,400+ reviews</p>
                  </Revs>
                </Review>
              </Text>
            </Nav>
            <Nav>
              <Icon>
                <img src={mod} alt="" />
              </Icon>
              <Text>
                <Title>
                  <h1>Mod Creator</h1>
                </Title>
                <Desc>
                  <p>
                    Drag-and-drop Minecraft modding. Design skins, blocks and
                    items. Modify mob behaviors. Create mods and add ons.
                    Explore worlds! Ages 7-12
                  </p>
                </Desc>
                <Review>
                  <Star></Star>
                  <Num>
                    {" "}
                    <p>4.0</p>
                  </Num>
                  <Revs>
                    <p>3,300+ reviews</p>
                  </Revs>
                </Review>
              </Text>
            </Nav>
          </Left>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default RatedApps;

const Star = styled.div`
  background: red;
  width: 10vw;
`;
const Num = styled.div`
  margin-left: 20px;
`;
const Revs = styled.div`
  margin-left: 20px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* background-image: url(${Botbg});
  background-position: bottom -10px left 10%;
  background-repeat: no-repeat;
  background-size: 100% 10rem; */
  margin-top: 50px;
`;
const Wrapper = styled.div`
  width: 85%;
`;

const Top = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    margin: 0;
  }
  p {
    opacity: 0.8;
    font-size: 1rem;
  }
  button {
    padding: 15px 25px;
    background-color: #fd7f00;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-weight: 600;

    :hover {
      cursor: pointer;
    }
  }
`;
const Bottom = styled.div`
  height: 75vh;
  display: flex;
  margin-top: 20px;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 5px;
  padding: 30px;
`;

const Nav = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
`;
const Icon = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: center;

  img {
    object-fit: contain;
    height: 50px;
  }
`;
const Text = styled.div`
  /* background-color: blue; */
  display: grid;
  grid-template-rows: 0.4fr 1fr 0.3fr;
  margin: 0;
`;
const Title = styled.div`
  /* background-color: purple; */

  h1 {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
  }
`;
const Desc = styled.div`
  /* background-color: brown; */
  p {
    margin: 0;
    font-size: 1.1rem;
    opacity: 0.9;
    grid-template-columns: repeat(3, 1fr);
  }
`;
const Review = styled.div`
  /* background-color: palegoldenrod; */
  display: flex;
`;
const Rev = styled.div``;
