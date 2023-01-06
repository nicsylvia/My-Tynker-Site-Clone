import React from "react";
import styled from "styled-components";
import maps from "../Assets/map-blue.png";
import svg from "../Assets/testimonials.svg";
import dots from "../Assets/dots.svg";
import boy from "../Assets/boy.png";
import Charl from "../Assets/charl.png";
import Valerie from "../Assets/Valerie.png";
import common from "../Assets/common.webp";
import AASL from "../Assets/aasl.png";
import Smart from "../Assets/smart.png";
import parents from "../Assets/parents.png";
import brain from "../Assets/brain.png";
import ppp from "../Assets/ppp.png";
import moms from "../Assets/moms.png";
import digital from "../Assets/digital.webp";
import piks from "../Assets/picks.webp";
const Map = () => {
  return (
    <Container>
      <h1>Join Tynker's Global Community</h1>
      <button>Sign up free</button>
      <Maps src={svg} />
      <Image src={maps} />
      <Hold>
        <Dots1 src={dots} />

        <Circle>
          <h2>
            Over 7 <br />
            Billion
          </h2>{" "}
          <p>Lines of code</p>
        </Circle>
      </Hold>
      <Hold2>
        <Dots2 src={dots} />
        <Circle>
          <h2>
            Over 100
            <br />
            Thousand
          </h2>{" "}
          <p>schools</p>
        </Circle>
      </Hold2>
      <Hold3>
        <Dots3 src={dots} />
        <Circle>
          <h2>
            60
            <br />
            Million
          </h2>{" "}
          <p>students</p>
        </Circle>
      </Hold3>
      <CardHold>
        <Card>
          <i>
            I thought a game was going to be extremely hard to make, but Tynker
            made it really easy.
          </i>
          <PicHold>
            <Text>
              <span>
                Tynker Featured
                <div>Maker</div>
              </span>
            </Text>
            <Round>
              {" "}
              <Pic src={boy} />
            </Round>
          </PicHold>
        </Card>
        <Card1>
          <i>
            There's so much opportunity once they understand how coding works.
            It's amazing to see them create incredible things themselves.
          </i>
          <PicHold>
            <Text1>
              <span>
                Charlotte R.
                <div>
                  Parent | Melbourne, <br /> Australia
                </div>
              </span>
            </Text1>
            <Round>
              {" "}
              <Pic src={Charl} />
            </Round>
          </PicHold>
        </Card1>
        <Card2>
          <i>
            {" "}
            Tynker has made programming fun, exciting, and simple and will help
            lead kids into their future.
          </i>
          <PicHold>
            <Text3>
              <span>
                Valerie S.
                <div>
                  5th Grade Teacher | <br /> California, US
                </div>
              </span>
            </Text3>
            <Round>
              {" "}
              <Pic src={Valerie} />
            </Round>
          </PicHold>
        </Card2>
      </CardHold>
      <Awards>
        <Wrapper>
          <Main>
            <Name src={common} />
          </Main>
          <Main>
            <Name src={AASL} />
          </Main>
          <Main>
            <Name src={Smart} />
          </Main>
          <Main>
            <Name src={parents} />
          </Main>
          <Main>
            {" "}
            <Name src={brain} />
          </Main>
          <Main>
            <Name1 src={ppp} />
          </Main>
          <Main>
            <Name src={moms} />
          </Main>
          <Main>
            <Name src={digital} />
          </Main>
          <Main>
            {" "}
            <Name src={piks} />
          </Main>
        </Wrapper>
      </Awards>
    </Container>
  );
};

export default Map;

const Container = styled.div`
  width: 100%;
  height: 2000px;

  margin-top: 180px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  h1 {
    margin: 0;
  }
  button {
    width: 150px;
    height: 45px;
    border-radius: 5px;
    border: none;
    font-size: 17px;
    text-transform: uppercase;
    background: #ff8d1a;
    color: white;
    font-weight: 600;
    margin-top: 18px;
  }
`;

const Maps = styled.img`
  width: 100%;
`;

const Image = styled.img`
  position: absolute;
  top: 35px;
`;

const Hold = styled.div`
  position: absolute;
  top: 15%;
  left: 17%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Hold2 = styled.div`
  position: absolute;
  top: 23%;
  right: 23%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Hold3 = styled.div`
  position: absolute;
  right: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PicHold = styled.div`
  width: 100%;
  height: 65px;

  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const CardHold = styled.div`
  width: 90%;
  height: 400px;

  position: absolute;
  top: 45%;
  display: flex;
  justify-content: space-between;
`;
const Card = styled.div`
  width: 390px;
  height: 350px;
  background: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  i {
    width: 50%;
    font-size: 22px;
  }
`;
const Card1 = styled.div`
  width: 390px;
  height: 100%;
  background: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  i {
    width: 50%;
    font-size: 22px;
  }
`;

const Circle = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: #33343b;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin: 0;
    text-align: center;
    line-height: 23px;
    color: #fde867;
  }
  p {
    margin: 0;
    color: white;
  }
`;

const Dots1 = styled.img``;
const Dots2 = styled.img``;
const Dots3 = styled.img``;

const Card2 = styled.div`
  width: 390px;
  height: 350px;
  background: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  i {
    width: 50%;
    font-size: 22px;
  }
`;
const Round = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 30px;
`;
const Pic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Text = styled.div`
  margin-right: 25px;
  font-size: 18px;

  span {
    font-weight: bold;
  }

  div {
    text-align: right;
    font-weight: bold;
  }
`;
const Text1 = styled.div`
  margin-right: 25px;
  font-size: 18px;

  span {
    font-weight: bold;
    margin-left: 51px;
  }

  div {
    text-align: right;
    font-weight: lighter;
  }
`;

const Text3 = styled.div`
  margin-right: 25px;
  font-size: 18px;

  span {
    font-weight: bold;
    margin-left: 79px;
  }

  div {
    text-align: right;
    font-weight: lighter;
  }
`;

const Awards = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 200px;

  display: grid;
  grid-template-columns: repeat(9, 1fr);
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.img`
  height: 90px;
`;

const Name1 = styled.img`
  height: 60px;
`;
