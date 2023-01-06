import React from "react";
import styled from "styled-components";
import apple from "../Assets/apple.png";
import google from "../Assets/google.png";
import microsoft from "../Assets/Microsoft.png";
import sylvan from "../Assets/sylvan.png";
import pbs from "../Assets/pbs.png";
import bbc from "../Assets/bbc-learning.png";
import facebook from "../Assets/facebook.png";
import lego from "../Assets/lego.png";
import minecraft from "../Assets/minecraft.png";
import mattel from "../Assets/mattel.png";
import hotwheels from "../Assets/hotwheels.png";
import barbie from "../Assets/barbie.png";

const Brands = () => {
  return (
    <Container>
      <h1>Trusted by Leading Brands</h1>
      <p>
        Our methods for learning to code all are provided within a safe,
        moderated community that is built <br /> around encouraging students to
        gain confidence in their abilities and do so without fear of failure.
      </p>
      <BrandHold>
        <Brandss>
          <Image src={apple} />
        </Brandss>
        <Brandss>
          <Image src={google} />
        </Brandss>
        <Brandss>
          <Image src={microsoft} />
        </Brandss>
        <Brandss>
          <Image src={sylvan} />
        </Brandss>
        <Brandss>
          <Image src={pbs} />
        </Brandss>
        <Brandss>
          <Image src={bbc} />
        </Brandss>
        <Brandss>
          <Image src={facebook} />
        </Brandss>
        <Brandss>
          <Image src={lego} />
        </Brandss>
        <Brandss>
          <Image src={minecraft} />
        </Brandss>
        <Brandss>
          <Image src={mattel} />
        </Brandss>
        <Brandss>
          <Image src={hotwheels} />
        </Brandss>
        <Brandss>
          <Image src={barbie} />
        </Brandss>
      </BrandHold>
    </Container>
  );
};

export default Brands;

const Container = styled.div`
  width: 75%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;

  p {
    text-align: center;
    font-size: 17px;
    opacity: 0.9;
  }
  h1 {
    margin: 0;
  }
`;

const BrandHold = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
`;

const Brandss = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 120px;
`;
