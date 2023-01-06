import React from "react";
import styled from "styled-components";
import kid from "../Assets/kid.png";
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Up>
          <First>
            <h3>ABOUT</h3>
            <p>
              Tynker is the world’s leading K-12 creative coding platform,
              enabling students of all ages to learn to code at home, school,
              and on the go. Tynker’s highly successful coding curriculum has
              been used by one in three U.S. K-8 schools, 100,000 schools
              globally, and over 60 million kids across 150 countries.
            </p>
          </First>
          <First1>
            <h3>RESOURCES</h3>
            <div>Blog</div>
            <div>About us</div>
            <div>Press</div>
            <div>Jobs</div>
            <div>Mobile Apps</div>
            <div>Coding eBooks</div>
            <div>Forum</div>
            <div>Store</div>
            <div>CS Authors</div>
          </First1>
          <First>
            <h3>PARENTS</h3>
            <div>Blog</div>
            <div>About us</div>
            <div>Press</div>
            <div>Jobs</div>
            <div>Mobile Apps</div>
            <div>Coding eBooks</div>
            <div>Forum</div>
            <div>Store</div>
            <div>CS Authors</div>
          </First>
          <First>
            <h3>EDUCATORS</h3>
            <div>Blog</div>
            <div>About us</div>
            <div>Press</div>
            <div>Jobs</div>
            <div>Mobile Apps</div>
            <div>Coding eBooks</div>
            <div>Forum</div>
            <div>Store</div>
            <div>CS Authors</div>
          </First>
          <First>
            <h3>PARENT NEWSLETTER</h3>
            <Input>
              <input placeholder="Enter your Email" />
              <button>Ok</button>
            </Input>
          </First>
        </Up>
        <Down>
          <Image src={kid} />
          <span>© 2022 Neuron Fuel</span>
          <div>Terms & Condition</div>
          <Pri>Privacy Policy</Pri>
          <div>Kids & onlie safety</div>
          <p>About us</p>
          <span>Contact us</span>
        </Down>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: #293037;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Up = styled.div`
  width: 100%;
  height: 300px;
  /* background-color: red; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid #999999; ;
`;
const Down = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  font-size: 13px;
  color: #999999;
  div {
    width: 150px;
    border-right: 1px solid white;
    display: flex;
    justify-content: center;
  }
  p {
    width: 80px;
    border-right: 1px solid white;
    display: flex;
    justify-content: center;
  }
  span {
    margin-left: 15px;
  }
`;
const First = styled.div`
  /* background-color: red; */
  /* border: 1px solid black; */

  color: #999999;
  h3 {
    margin: 0;
    margin-bottom: 6px;
    margin-top: 18px;
    font-size: 13px;
  }
  p {
    margin: 0;
  }
  div {
    font-size: 18px;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  height: 400px;
  /* background-color: green; */
`;

const First1 = styled.div`
  color: #999999;
  h3 {
    margin: 0;
    margin-bottom: 6px;
    margin-left: 25px;
    margin-top: 18px;
    font-size: 13px;
  }
  div {
    margin: 0;
    margin-left: 25px;
    font-size: 18px;
  }
`;

const Input = styled.div`
  width: 280px;
  height: 30px;
  background-color: black;
  display: flex;
  align-items: center;

  input {
    width: 70%;
    height: 100%;
    outline: none;
    border: none;
    background: transparent;
    padding-left: 10px;
    border: 1px solid white;

    ::placeholder {
      font-size: 15px;
      color: #bfcaca;
    }
  }
  button {
    width: 30%;
    height: 37px;
    background: #0096aa;
    border: none;
  }
`;

const Image = styled.img``;
const Pri = styled.div`
  width: 30px;
  color: white;
  border-right: 1px solid red;
  text-transform: uppercase;
`;
