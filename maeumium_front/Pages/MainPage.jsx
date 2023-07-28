import React from "react";
import Background from "../Components/Background";
import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import "../font/Font.css";
import { useState } from "react";


const Entire = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'GangwonEduALl';
`;

const SubBar = styled.div `
    display: flex;
    width: 390px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 15px 0px 30px 0px;
`;

const Nickname1 = styled.div `
    font-size: 15px;
    font-weight: bold;
    padding-right: 3px;
`;

const Nickname2 = styled.div `
    font-size: 15px;
    font-weight: bold;
    padding-left: 3px;
`;

const Heart = styled.div `
    font-size: 15px;
    font-weight: bold;
    font-family: 'GangwonEdusaeeum';
`;

const SubBarLeft = styled.div `
    display: flex;
`;

const SubBarRight = styled.div `
    display: flex;
`;

const LoveDate = styled.div `
    font-size: 15px;
    font-weight: bold;
`;



export function MainPage() {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <Background>
                <Entire>
                <img src="../image/BlackLogo.png"/>
                <SubBar>
                    <SubBarLeft>
                        <Nickname1>유저닉네임1</Nickname1>
                        <Heart>❤️</Heart>
                        <Nickname2>유저닉네임2</Nickname2>
                    </SubBarLeft>
                    <SubBarRight>
                        <LoveDate>000일 째, 사랑 중</LoveDate>
                        <Heart>❤️</Heart>
                    </SubBarRight>
                </SubBar>
                <Calendar onChange={onChange} value={value} />
                </Entire>
            </Background>
        </>
    );
}

export default MainPage;