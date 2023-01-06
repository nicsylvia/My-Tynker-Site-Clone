import React from "react";
import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";
const Card = () => {
  return (
    <Container>
      <Temp>
        <h4>CODING BENEFITS</h4>
        <Hold>
          <RiArrowRightSLine /> <span>Top 10 Reasons to Code</span>
        </Hold>
        <Hold>
          <RiArrowRightSLine /> <span>Kids Coding Basics</span>
        </Hold>
        <Hold>
          <RiArrowRightSLine /> <span>Develop 21st Century Skills</span>
        </Hold>
        <Hold>
          <RiArrowRightSLine /> <span>Download eBooks on Coding</span>
        </Hold>
      </Temp>
      <Temp>
        <h4>CODING GUIDES</h4>
        <Hold>
          <RiArrowRightSLine /> <span>What is Coding for Kids</span>
        </Hold>
        <Hold>
          <RiArrowRightSLine /> <span>Coding with Minecraft</span>
        </Hold>
        <Hold>
          <RiArrowRightSLine /> <span>Coding with Electronic Kits</span>
        </Hold>
        <Hold>
          <RiArrowRightSLine /> <span>Coding with Connected Toys</span>
        </Hold>
        <Hold>
          <RiArrowRightSLine /> <span>More Coding Resources</span>
        </Hold>
      </Temp>
      <Temp>
        <h4>TYNKER HIGHLIGHTS</h4>
        <Hold>
          <RiArrowRightSLine /> <span>What’s New in Tynker?</span>
        </Hold>
        <Hold>
          <RiArrowRightSLine /> <span>COVID-19 Impact report</span>
        </Hold>
        <Hold>
          <RiArrowRightSLine /> <span>Meet our Featured Makers</span>
        </Hold>
        <Hold>
          <RiArrowRightSLine /> <span>Seasonal Coding Projects</span>
        </Hold>
        <Hold>
          <RiArrowRightSLine /> <span>Celebrating Women in STEM</span>
        </Hold>
      </Temp>
      <Temp>
        <h4>CODING IN SCHOOLS</h4>
        <Hold>
          <RiArrowRightSLine /> <span>K-12 School Plans</span>
        </Hold>
        <Hold>
          <RiArrowRightSLine /> <span>AP Computer Science Principles</span>
        </Hold>
        <Hold>
          <RiArrowRightSLine /> <span>AP Computer Science A</span>
        </Hold>
        <Hold>
          <RiArrowRightSLine /> <span>K-12 Success Stories</span>
        </Hold>
      </Temp>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 85%;
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  /* background-color: blue; */
  gap: 25px;
`;
const Temp = styled.div`
  border-radius: 5px;
  height: 220px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: white;
  padding: 20px;

  h4 {
    color: #0096aa;
    margin-left: 25px;
    margin-top: 40px;
    margin-bottom: 12px;
  }
`;

const Hold = styled.div`
  /* display: flex;
  align-items: center; */
  font-size: 13px;
  margin-left: 25px;
  margin-top: 6px;
`;
