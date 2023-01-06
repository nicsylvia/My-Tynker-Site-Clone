import React, {useState} from 'react'
import styled from 'styled-components'
import image from "./Assets/bhHero.png"
import image2 from "./Assets/curve.svg"
import image3 from "./Assets/tynker.png"
import {GiGamepad} from "react-icons/gi"
import {BsGift} from "react-icons/bs"
import Globaltext from './Globaltext'
import hero from "./Assets/hero.png"
import vid from "./Assets/video-play-icon.svg";
import VideoPlay from "./VideoPlayer";

const Header = () => {

   const [isHovering, setIsHovering] = useState(false);
    const [Hovering, setHovering] = useState(false);
    const [HoveringIn, setHoveringIn] = useState(false);
    const [MyHoveringIn, setMyHoveringIn] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const MouseOver = () => {
    setHovering(true);
  };

  const MouseOut = () => {
    setHovering(false);
  };
  const MouseOverIn = () => {
    setHoveringIn(true);
  };

  const MouseOutIn = () => {
    setHoveringIn(false);
  };
  const MyMouseOverIn = () => {
    setMyHoveringIn(true);
  };

  const MyMouseOutIn = () => {
    setMyHoveringIn(false);
  };

  

  return (

    <Container>
        <Head>
            <Left>
                <Images src={image3} />
            </Left>
            <Mid>
                <Nav onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <Icons><GiGamepad /></Icons>
                     PLAY
                </Nav>
                <Nav onMouseOver={MouseOver} onMouseOut={MouseOut}>
                    PARENTS
                </Nav>
                <Nav onMouseOver={MouseOverIn} onMouseOut={MouseOutIn}>
                     EDUCATORS
                </Nav>
                <Nav onMouseOver={MyMouseOverIn} onMouseOut={MyMouseOutIn}>
                     WHY CODE?
                </Nav>
                <Nav>
                    <Icons1><BsGift /></Icons1>
                     GIFT
                </Nav>
            </Mid>
            <Right>
                <Button>START FOR FREE</Button>
                <Log>LOG IN</Log>
            </Right>
        </Head>
        {isHovering && (<Card><Globaltext txt="BYJU'S Coding Cup" tet="Coding Games"tot="Minecraft"twt="Hour of Code"/></Card>)}
        {Hovering && (<Card2><Globaltext txt="Overview" tet="Curriculum"tot="Get Started for Free"twt="Hour of Code"/></Card2>)}
        {HoveringIn && (<Card3><Globaltext txt="Overview" tet="School Curriculum"tot="Request a Quote"twt="Request a PD"/></Card3>)}
        {MyHoveringIn && (<Card4><Globaltext txt="What is Coding?" tet="Whing Coding Matters"tot="Coding eBooks"twt="Mobile Apps"/></Card4>)}
        <Img src={image2} />
        <Wrapper>
            <L>
                <Top>Coding For Kids and <br /> Teens Made Easy</Top>
                <P>The fun way to learn programming and develop <br />
                 problem-solving & critical thinking skills!</P>
                 <Button2>GET STARTED FOR FREE</Button2>
            </L>
            <R>
                <Hero src={hero} />
                <Video src={vid}  />
            </R>
        </Wrapper>
    </Container>
  )
}

export default Header
const Video = styled.img`
    position: absolute;
    top: 270px;
    left: 320px;
`
const Button2 = styled.div`
    width: 230px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F99600;
    color: #fefefe;
    font-size: 1.1rem;
    margin-left: 59px;
    font-weight: 600;
    border-radius: 5px;
    transition: ease-out 2s;
    text-align: center;
    cursor: pointer;
`
const P = styled.div`
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 1.75rem;
    font-family: Open Sans,Helvetica,Arial,sans-serif;
    line-height: 1.6;
    color: white;
    margin-left: 59px;
    margin-top: 30px;
`
const Top = styled.div`
    font-family: Montserrat,Open Sans,Helvetica,Arial,sans-serif;
    font-size: 2.875rem;
    font-weight: 600;
    color: white;
    line-height: 1.3;
    margin-left: 55px;
    margin-top: 50px;
`
const Hero = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: 59px;
    /* background-color: blue; */
`
const R = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const L = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.div`
    display: flex;
    width: 95%;
    height: 545px;
    margin-top: 40px;
`
const Card4 = styled.div`
    position: absolute;
    width: 160px;
    height: 130px;
    display: flex;
    align-items: center;
    color: #596267;
    font-size: 14px;
    font-weight: 300;
    flex-direction: column;
    background-color: white;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
    left: 717px;
    top: 60px;
    border-radius: 10px;
    transition: all 350ms;
`
const Card3 = styled.div`
    position: absolute;
    width: 160px;
    height: 130px;
    display: flex;
    align-items: center;
    color: #596267;
    font-size: 14px;
    font-weight: 300;
    flex-direction: column;
    background-color: white;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
    left: 580px;
    top: 60px;
    border-radius: 10px;
    transition: all 350ms;
`
const Card2 = styled.div`
    position: absolute;
    width: 160px;
    height: 130px;
    display: flex;
    align-items: center;
    color: #596267;
    font-size: 14px;
    font-weight: 300;
    flex-direction: column;
    background-color: white;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
    left: 458px;
    top: 60px;
    border-radius: 10px;
    transition: all 350ms;
`

const Card = styled.div`
    position: absolute;
    width: 160px;
    height: 130px;
    display: flex;
    align-items: center;
    color: #596267;
    font-size: 14px;
    font-weight: 300;
    flex-direction: column;
    background-color: white;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
    left: 340px;
    top: 60px;
    border-radius: 10px;
    transition: all 350ms;
`
const Log = styled.div`
    width: 75px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 600;
    color: white;
    margin-left: 20px;
    transition: all 350ms;
    :hover{
        background-color: #82CA6D;
        color: white;
        border: none
    }
`
const Button = styled.div`
    width: 130px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    transition: all 350ms;
    :hover{
        background-color: #82CA6D;
        color: white;
        border: none;
    }
`
const Right = styled.div`
    width: 220px;
    height: 100%;
    display: flex;
    align-items: center;
`
const Icons1 = styled.div`
    margin-top: 5px;
    margin-right: 5px;
`
const Icons = styled.div`
    font-size: 34px;
    margin-top: 7px;
    margin-right: 5px;
`
const Nav = styled.h3`
    display: flex;
    color: white;
    font-weight: 600;
    font-size: 16px;
    height: 35px;
    margin: 0;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    transition: all 350ms;
    :hover{
        border: 1px solid white;
        background-color: #bdd1ee;
    }
`
const Mid = styled.div`
    width: 560px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Images = styled.img`
    height: 25px;
    align-items: center;
    margin-top: -7px;
`
const Left = styled.div`
    width: 180px;
    display: flex;
    align-items: center;
    height: 100%;
`
const Head = styled.div`
    width: 87%;
    height: 70px;
    display: flex;
    position: sticky;
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */
    margin-top: 15px;
`
const Img = styled.img`
    position: absolute;
    top: 539px;
    z-index: 5654;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    height: 90vh;
    background-image: url(${image});
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`