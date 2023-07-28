import React from "react";
import styled from "styled-components";
import IntroCircles from "../image/IntroCircles.png";
import MainLogo from "../image/mainLogo.png"
import { Link } from "react-router-dom"; // Link를 import 합니다.

const PostTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    width: 390px;
    height: 844px;
    position: relative; 
`;

const BackgroundImage = styled.div`
    display: flex;
    width: 390px;
    height: 844px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover; 
    position: relative; 
    top: 50%; /* 핵심코드 */
    left: 50%; /* 핵심코드 */
    transform: translate( -50%, -50%); /* 핵심코드 */
`;

const IntroTitle = styled.div`
    font-size: 15px;
    color: #000000;
    padding-top: 125px;
    position: absolute;
    bottom: 550px;
`;

const MainLogos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 300px;
    position: absolute;
    bottom: 100px;
`;

const LoginButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 347px;
    height: 56px;
    font-size: 16px;
    background-color: #7209B7;
    border-radius: 50px;
    color: white;
    position: absolute;
    top: 750px;
`;

const IntroContent = styled.div`
    font-size: 15px;
    color: #7209B7;
    padding: 0px 85px 20px 0px;
    position: absolute;
    top: 720px;
`;


export function Intro() {
    return (
        <>
        <PostTitle>
            <BackgroundImage>
                <img src={IntroCircles} width="390px"/>
                <IntroTitle>일기로 잇는 너와 나의 마음</IntroTitle>
                <MainLogos><img src={MainLogo}/></MainLogos>
                <IntroContent>나도 몰랐던 내 마음, 연인의 마음 보러가기</IntroContent>
                <LoginButton>회원가입</LoginButton>
            </BackgroundImage>
        </PostTitle>
        </>
    );
}

export default Intro;