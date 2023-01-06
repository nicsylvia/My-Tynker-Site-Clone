import React from "react";
import styled from "styled-components";
import topbg from "../Assets/eduwaveTop.svg";
import Botbg from "../Assets/eduwaveTop.svg";
import parents from "../Assets/for-parents.webp";
import teachers from "../Assets/for-teachers.webp";
import SponsorCard from "./SponsorCard";

const ParentEdu = () => {
  return (
    <Container>
      <Wrapper>
        <SponsorCard
          flex="jh"
          Bigtext="Parents"
          text="Coding plays a pivotal role in our daily lives from cars and coffee makers to life-changing advancements in medicine, environmental conservation, space exploration, and much more."
          text2="At Tynker, we teach kids and teens to code through both our self-paced, game-like courses and our teacher-led private online classes. With Tynker, there’s a path to coding certification for all ages and skill levels that will advance them to real-world Python, Web Dev, Data Science and more!"
          text3="Select the option that’s best for your child!"
          img={parents}
          btnText="LEARN MORE"
          align=""
        />
        <SponsorCard
          flex=""
          Bigtext="Educators"
          text="Join over 100,000 schools that use Tynker to engage students with coding and connect with other educators who love to code!"
          text2="Teaching coding with Tynker is as easy as 1-2-3. In just minutes, you can create a free account, set up your virtual classroom, and assign ready-made lesson plans!"
          text3="Tynker empowers K-12 educators with free PD, standards-aligned curricula, cross-curricular STEM coding, AP Computer Science courses, and many great coding resources."
          btnText="LEARN MORE"
          img={teachers}
          align=""
        />
      </Wrapper>
    </Container>
  );
};

export default ParentEdu;

const Container = styled.div`
  width: 100%;
  background-color: #ebfcff;
  background-image: url(${topbg});
  /* background-position: top -10px left 50%, bottom -10px left -50%; */
  background-repeat: no-repeat;
  background-size: 100% 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  margin-top: 150px;
  width: 85%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;
