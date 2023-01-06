import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";
const Question = () => {

  const [show,setShow] =useState<Boolean>(false)
   
  const Toggle =()=>{
    setShow(!show)
  }
  const [show1,setShow1] =useState<Boolean>(false)
   
  const Toggle1 =()=>{
    setShow1(!show1)
  }
  const [show2,setShow2] =useState<Boolean>(false)
   
  const Toggle2=()=>{
    setShow2(!show2)
  }
  const [show3,setShow3] =useState<Boolean>(false)
   
  const Toggle3 =()=>{
    setShow3(!show3)
  }
  const [show4,setShow4] =useState<Boolean>(false)
   
  const Toggle4 =()=>{
    setShow4(!show4)
  }
  const [show5,setShow5] =useState<Boolean>(false)
   
  const Toggle5 =()=>{
    setShow5(!show5)
  }
  const [show6,setShow6] =useState<Boolean>(false)
   
  const Toggle6 =()=>{
    setShow6(!show6)
  }
  const [show7,setShow7] =useState<Boolean>(false)
   
  const Toggle7 =()=>{
    setShow7(!show7)
  }
   return (
    <Container>
      <h1>Frequently asked questions</h1>
      <Temp>
        <Hold onClick={Toggle}>
       
          <RiArrowRightSLine /> <span> Is coding good for kids?</span>
      
        </Hold>
        {!show? <Message>
          
          We're living during a high-tech revolution, witnessing life-changing <br /> advancements in medicine, environmental conservation, and much more. At <br /> the core of all these amazing projects and discoveries is CODE. Code can  be <br /> the thing that differentiates your child from peers and allows them to stand <br /> out as an asset for companies when they are looking for employment. The <br /> children who learn to code today will become the creators of the technology <br /> tomorrow. Learning how to code can help children make a major   <br /> contribution to the world that they live in and make a lasting impact

         

          <p>
          As kids and teens learn to code, they also build essential skills like critical <br /> thinking, logic, and problem-solving. They learn to logically sequence events, <br /> create playable games, tell good stories, and model real situations. They also <br /> learn computational thinking  by developing algorithmic and design thinking <br />abilities. Learning to code has become an essential element of a child's <br /> education and an excellent way to express their creativity and imagination.
          
          </p>
          </Message>:null}
        <Hold onClick={Toggle1}>
          <RiArrowRightSLine /> <span> How do I start my child coding?</span>
        </Hold>
        {!show1? <Message>
          
          Coding, otherwise known as programming, is a creative activity for all children. Your child might not care about writing data processing algorithms, but they might enjoy creating games, programming music, designing websites, or just playing with code. Learning to code is for everyone; you don\'t have to be good at math or a "techie" to learn how to code. Kids as young as five can learn to code and pick it up faster than most adults

         

          <p>
          When your kids are starting, pick a program like MIT\'s Scratch or Tynker Junior app. The visual style of these programs makes it easy for young children to learn to code. Scratch and Tynker have a graphical interface that works. Drag-and-drop code blocks snap together. Pieces of code that don\'t make computational sense won\'t fit together, making syntax errors impossible
          
          </p>
          <p>
          Older children can learn to code with Python by building games, art, music, and more. Some programs like Tynker offer a placement test to set your child on the right track for their age and experience level.
          </p>
          </Message>:null}
        <Hold onClick={Toggle2}>
          <RiArrowRightSLine />{" "}
          <span> What age is best to introduce coding to kids?</span>
        </Hold>
        <Hold onClick={Toggle3}>
          <RiArrowRightSLine />{" "}
          <span> Which is the best coding for kids program?</span>
        </Hold>
        <Hold onClick={Toggle4}>
          <RiArrowRightSLine /> <span> Why is coding needed?</span>
        </Hold>
        <Hold onClick={Toggle5}>
          <RiArrowRightSLine />{" "}
          <span> Why should we use Tynker coding for kids?</span>
        </Hold>
        <Hold onClick={Toggle6}>
          <RiArrowRightSLine /> <span> How do I teach my 7 year old code?</span>
        </Hold>
        <Hold onClick={Toggle7}>
          <RiArrowRightSLine />{" "}
          <span> What options are there for coding for teens?</span>
        </Hold>
        <hr />
      </Temp>
    </Container>
  );
};

export default Question;

const Message =styled.div`
margin-left: 50px;
font-size: 19px;
/* height: 500px; */
/* background-color: blue; */
width: 700px;
margin-bottom: 50px;
  color: gray;


`
const Container = styled.div`
  width: 100%;
  /* height: 550px; */
  background-color: #f4f9fa;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 30px;
  }
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  font-size: 20.5px;
  margin-bottom: 20px;
  font-weight: bold;
  color: darkgray;
  font-size: 26px;

  display: flex;

  hr {
    width: 300px;
  }
  :hover{
    color:#82CA6D;
    cursor: pointer;
  }
`;
const Temp = styled.div`
  width: 428px;
  /* height: 50px; */
  /* background-color: red; */
  /* border-bottom: 1px dotted black; */
`;
