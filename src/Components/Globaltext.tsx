import React from 'react'
import styled from 'styled-components'

interface Text{
    txt: string,
    tet: string,
    tot: string,
    twt: string
}

const Globaltext: React.FC<Text> = ({txt, tet, tot, twt}) => {
  return (
    <>
        <Nav1>{txt}</Nav1>
        <Nav2>{tet}</Nav2>
        <Nav3>{tot}</Nav3>
        <Nav4>{twt}</Nav4>
    </>
  )
}

export default Globaltext
const Nav4 = styled.div`
    cursor: pointer;
    width: 95%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    :hover{
        background-color: #e4e3e3;
    }
`
const Nav3 = styled.div`
    cursor: pointer;
    width: 95%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    :hover{
        background-color: #e4e3e3;
    }
`

const Nav2 = styled.div`
    cursor: pointer;
    width: 95%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    :hover{
        background-color: #e4e3e3;
    }
`

const Nav1 = styled.div`
    cursor: pointer;
    width: 95%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    :hover{
        background-color: #e4e3e3;
    }
`