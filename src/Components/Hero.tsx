import React, { useState } from "react";
import styled from "styled-components";
import hero from "../Assets/hero.png";
import wave from "../Assets/wave.svg";
import bg from "../Assets/homepage-backdrop.png";
import logo from "../Assets/tynker-logo-white.png";
import GlobalButton from "./GlobalButton";
import NavDropdown from "./NavDropdown";
import video from "../Assets/video-play-icon.svg";
import kidsVideo from "./Assets/kidsVideo.mp4";

const Hero = () => {
  const [show, setShow] = useState<boolean>(false);
  const [Parentshow, setParentshow] = useState<boolean>(false);
  const [Edushow, setEdushow] = useState<boolean>(false);
  const [Whyshow, setWhyshow] = useState<boolean>(false);
  const [videoShow, setVideo] = useState<boolean>(false);

  const toggle = () => {
    setShow(!show);
    setParentshow(false);
    setEdushow(false);
    setWhyshow(false);
  };
  const toggle2 = () => {
    setParentshow(!Parentshow);
    setShow(false);
    setEdushow(false);
    setWhyshow(false);
  };
  const toggle3 = () => {
    setEdushow(!Edushow);
    setParentshow(false);
    setShow(false);
    setWhyshow(false);
  };
  const toggle4 = () => {
    setWhyshow(!Whyshow);
    setParentshow(false);
    setEdushow(false);
    setShow(false);
  };
  const ShowVid = () => {
    setVideo(!videoShow);
  };
  const CloseShowVid = () => {
    setVideo(false);
  };

  return (
    <Container>
      <HeaderWrapper>
        <Header>
          <Logo>
            <img src={logo} alt="" />
          </Logo>
          <NavHolder>
            <Nav>
              <p onMouseOver={toggle}>Play</p>
            </Nav>
            <Nav>
              <p onMouseOver={toggle2}>Parents</p>
            </Nav>
            <Nav>
              <p onMouseOver={toggle3}>educators</p>
            </Nav>
            <Nav>
              <p onMouseOver={toggle4}>why code?</p>
            </Nav>
            <Nav>
              <p>gift</p>
            </Nav>
          </NavHolder>
          <Button>
            <GlobalButton
              text="start for free"
              bg=""
              border="fg"
              hov="#17beaa"
            />
            <GlobalButton text="log in" bg="" border="" hov="#17beaa" />
          </Button>
        </Header>
      </HeaderWrapper>

      <Wrapper>
        <First>
          <h1>Coding For Kids and Teens Made Easy</h1>
          <p>
            The fun way to learn programming and develop problem-solving &
            critical thinking skills!
          </p>
          <button>GET STARTED FOR FREE</button>
        </First>
        <Second>
          <img src={hero} alt="" />
          <HeroPic>
            <img onClick={ShowVid} src={video} alt="" />
          </HeroPic>
        </Second>
      </Wrapper>

      <Svg>
        <img src={wave} alt="" />
      </Svg>

      {videoShow ? (
        <Popup>
          <VideoHold>
            <Top>
              <p onClick={CloseShowVid}>close</p>
            </Top>
            <Bottom>
              <video src={kidsVideo} autoPlay controls />
            </Bottom>
          </VideoHold>
        </Popup>
      ) : null}

      {show ? (
        <NavDropdown
          text="BYJU'S Coding Camp"
          text1="Coding Game"
          text2="MineCraft"
          text3="Hour of Code"
          left="350px"
        />
      ) : null}
      {Parentshow ? (
        <NavDropdown
          text="Overview"
          text1="Curriculum"
          text2="Get Started for Free"
          text3=""
          left="450px"
        />
      ) : null}
      {Parentshow ? (
        <NavDropdown
          text="Overview"
          text1="Curriculum"
          text2="Get Started for Free"
          text3=""
          left="450px"
        />
      ) : null}
      {Edushow ? (
        <NavDropdown
          text="Overview"
          text1="School Curriculum"
          text2="Request a Quote"
          text3="Training & PD"
          left="550px"
        />
      ) : null}
      {Whyshow ? (
        <NavDropdown
          text="What is Coding?"
          text1="Why Coding Matters"
          text2="Coding Ebooks"
          text3="Mobile Apps"
          left="700px"
        />
      ) : null}
    </Container>
  );
};

export default Hero;
const Top = styled.div`
  height: 7vh;
  display: flex;
  justify-content: flex-end;

  p {
    color: #fff;
    :hover {
      cursor: pointer;
    }
  }
`;
const Bottom = styled.div`
  height: calc(100% - 7vh);

  video {
    width: 100%;
    height: 100%;
  }
`;
const Popup = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00000092;
  position: absolute;
  /* top: 70px; */
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const VideoHold = styled.div`
  width: 70%;
  height: 80%;
  /* background-color: green; */
`;

const Button = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  width: 10.2vw;
  display: flex;
  margin-right: 100px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Nav = styled.div`
  p {
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    font-size: 1.05rem;
    margin-right: 30px;
    padding: 0.6rem;
    border-radius: 5px;
    transition: all ease-in 0.2s;

    :hover {
      border: 1px solid white;
      cursor: pointer;
      background-color: #ffffff39;
    }
  }
`;
const NavHolder = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  /* justify-content: center; */
  /* background-color: olive; */
  margin-right: 110px;
`;

const HeaderWrapper = styled.div`
  /* background-color: orchid; */
  width: 100%;
  /* position: fixed; */
  /* top: 0; */
  z-index: 9999;
`;
const Header = styled.div`
  width: 85%;
  margin: auto;
  height: 10vh;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(${bg});
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Svg = styled.div`
  height: 100px;
  width: 100%;
  z-index: 2;
  img {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
`;
const First = styled.div`
  margin-top: 50px;

  h1 {
    font-size: 3rem;
    color: #fff;
  }
  p {
    color: #fff;
    font-size: 1.3rem;
    margin-bottom: 40px;
  }
  button {
    padding: 20px 30px;
    background-color: orange;
    color: #fff;
    border: none;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 10px;
  }
`;
const Second = styled.div`
  /* height: 100%; */
  /* width: 60%; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    height: 110%;
    position: relative;
    top: 109px;
  }
`;
const HeroPic = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  img {
    position: relative;
    top: 100px;
    right: 30px;

    :hover {
      cursor: pointer;
    }
  }
`;
