import React from "react";
import styled from "styled-components";
import { useState } from "react";

const JoinBackgrounds = styled.div`
    display: flex;
    width: 390px;
    height: 100vh;
    flex-direction: column;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; 
    background-image: url('../image/Joinbackground.png');
`;

const JoinTitle = styled.div`
    font-weight: bold;
    font-size: 23px;
    padding: 70px 0px 10px 30px;
`;

const Names = styled.div`
    font-size: 16px;
    padding: 0px 0px 0px 30px;
`;
const JoinName = styled.input`
    font-size: 12px;
    border: 0.2px solid #A9AFB3;
    width: 300px;
    height: 45px;
    padding-left: 0.8rem;
    border-radius: 2px;
    display: flex;
    font-family: inherit;  
    outline-style: none;  /* 포커스시 발생하는 효과 제거를 원한다면 */
    -webkit-appearance: none;  /* 브라우저별 기본 스타일링 제거 */
    margin-bottom: 18px;
`;

const Dates = styled.div`
    font-size: 16px;
    padding: 0px 0px 0px 30px;
    margin-bottom: 18px;
`;

const JoinDate = styled.input`
    font-size: 12px;
    border: 0.2px solid #A9AFB3;
    color: #878D91;
    width: 300px;
    height: 45px;
    padding-left: 0.8rem;
    border-radius: 2px;
    display: flex;
    font-family: inherit;  
    outline-style: none;  /* 포커스시 발생하는 효과 제거를 원한다면 */
    -webkit-appearance: none;  /* 브라우저별 기본 스타일링 제거 */
`;

const Genders = styled.div`
    font-size: 16px;
    padding: 0px 0px 0px 30px;
`;

const GenderChoose = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 30px;
    margin-bottom: 18px;
`;

const Gender = styled.div`
    display: flex;
    height: 45px;
    width: 78px;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    border-radius: 5px;
    text-align: center;
    border: 0.2px solid #A9AFB3;
`;

const PhoneInput = styled.input`
    font-size: 12px;
    border: 0.2px solid #A9AFB3;
    width: 219px;
    height: 45px;
    padding-left: 0.8rem;
    display: flex;
    font-family: inherit;  
    outline-style: none;  /* 포커스시 발생하는 효과 제거를 원한다면 */
    -webkit-appearance: none;  /* 브라우저별 기본 스타일링 제거 */
    margin-bottom: 18px;
    border-radius: 2px;
`;

const Phones = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 30px;
`;
const PhoneButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 45px;
    font-size: 16px;
    font-size: 10px;
    background-color: #7209B7;
    border-radius: 5px;
    color: white;
    margin-left: 10px;
`;

const ID = styled.div`
    font-size: 16px;
    padding: 0px 0px 0px 30px;
`;
const IDs = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    margin-bottom: 18px;
`;

const JoinID = styled.input`
    font-size: 12px;
    border: 0.2px solid #A9AFB3;
    width: 219px;
    height: 45px;
    padding-left: 0.8rem;
    border-radius: 2px;
    display: flex;
    font-family: inherit;  
    outline-style: none;  /* 포커스시 발생하는 효과 제거를 원한다면 */
    -webkit-appearance: none;  /* 브라우저별 기본 스타일링 제거 */
`;

const IDButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 45px;
    font-size: 16px;
    font-size: 10px;
    background-color: #7209B7;
    border-radius: 5px;
    color: white;
    margin-left: 10px;
`;

const PW = styled.div`
    font-size: 16px;
    padding: 0px 0px 0px 30px;
    margin-bottom: 18px;
`;
const JoinPW = styled.input`
    font-size: 12px;
    border: 0.2px solid #A9AFB3;
    width: 300px;
    height: 45px;
    padding-left: 0.8rem;
    border-radius: 2px;
    display: flex;
    font-family: inherit;  
    outline-style: none;  /* 포커스시 발생하는 효과 제거를 원한다면 */
    -webkit-appearance: none;  /* 브라우저별 기본 스타일링 제거 */
`;

const PWS = styled.div`
    font-size: 16px;
    padding: 0px 0px 0px 30px;
    margin-bottom: 18px;
`;
const JoinPWS = styled.input`
    font-size: 12px;
    border: 0.2px solid #A9AFB3;
    width: 300px;
    height: 45px;
    padding-left: 0.8rem;
    border-radius: 2px;
    display: flex;
    font-family: inherit;  
    outline-style: none;  /* 포커스시 발생하는 효과 제거를 원한다면 */
    -webkit-appearance: none;  /* 브라우저별 기본 스타일링 제거 */
`;

const Nicknames = styled.div`
    font-size: 16px;
    padding: 0px 0px 0px 30px;
`;

const JoinNickname = styled.input`
    font-size: 12px;
    border: 0.2px solid #A9AFB3;
    width: 300px;
    height: 45px;
    padding-left: 0.8rem;
    border-radius: 2px;
    display: flex;
    font-family: inherit;  
    outline-style: none;  /* 포커스시 발생하는 효과 제거를 원한다면 */
    -webkit-appearance: none;  /* 브라우저별 기본 스타일링 제거 */
`;

const Receive = styled.div`
    font-size: 12px;
    display: flex;
    flex-direction: row;
    padding: 20px 0px 0px 30px;
    align-items: center;
`;
const ReceiveInput = styled.input`
    font-size: 12px;
    border: 0.2px solid #A9AFB3;
    width: 18px;
    height: 18px;
    padding-left: 0.8rem;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    outline-style: none;
    -webkit-appearance: none;
    cursor: pointer;
    position: relative;

    ::before {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 2px;
    width: 14px;
    height: 14px;
    background-color: #7209B7;
    border-radius: 2px;
    opacity: ${props => (props.checked ? "1" : "0")};
    }
`;

const ReceiveClick = styled.div`
    color: #7209B7;
    font-weight: bold;
    padding-left: 100px;
`;

const JoinButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 347px;
    height: 56px;
    font-size: 16px;
    background-color: #7209B7;
    border-radius: 5px;
    color: white;
    margin: 30px 0px 0px 20px;
`;

const Bottom = styled.div`
    padding-top: 30px;
`;

export function Join() {
    const [username, setUsername] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phone, setPhone] = useState('');
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [nickname, setNickname] = useState('');
    const [selectedGender, setSelectedGender] = useState(null); // Add selectedGender state
    const [receiveAgreement, setReceiveAgreement] = useState(false);

    const [errors, setErrors] = useState({
        username: '',
        birthdate: '',
        phone: '',
        userid: '',
        password: '',
        passwordConfirm: '',
        nickname: '',
    });

    return (
        <>
            <JoinBackgrounds>
                <JoinTitle>회원가입</JoinTitle>
                <Names>이름
                    <JoinName type="text" name="username" value={username} placeholder="본인 이름" onChange={(e) => {
                        setUsername(e.target.value);
                    }} />
                </Names>
                {errors.username && (
                    <ErrorMessage>{errors.username}</ErrorMessage>
                )}
                <Genders>성별</Genders>
                <GenderChoose>
                    <Gender
                        style={{
                            borderColor: selectedGender === 'male' ? '#7209B7' : '#A9AFB3'
                        }}
                        onClick={() => setSelectedGender('male')}
                    >
                        남성
                    </Gender>
                    <Gender
                        style={{
                            borderColor: selectedGender === 'female' ? '#7209B7' : '#A9AFB3'
                        }}
                        onClick={() => setSelectedGender('female')}
                    >
                        여성
                    </Gender>
                </GenderChoose>

                <Dates>생년월일
                    <JoinDate type="date" name="birthdate" value={birthdate} placeholder="생년월일" onChange={(e) => {
                        setBirthdate(e.target.value);
                    }} />
                </Dates>
                <Phones>휴대폰 번호</Phones>
                <Phones>
                    <PhoneInput type="text" name="phone" value={phone} placeholder="010 포함 (특수문자 '-' 제외)" onChange={(e) => {
                        setPhone(e.target.value);
                    }} />
                    <PhoneButton onClick={() => {
                        console.log(text)
                    }}>인증 요청</PhoneButton>
                </Phones>

                
                <ID>아이디</ID>
                <IDs>
                    <JoinID type="text" name="userid" value={userid} placeholder="5글자 이상" onChange={(e) => {
                        setUserid(e.target.value);
                    }} />
                    <IDButton onClick={() => {
                        console.log(text)
                    }}>중복 확인</IDButton>
                </IDs>

                <PW>
                    비밀번호
                    <JoinPW type="password" name="userpassword" value={password} placeholder="영어+숫자 6자 이상" onChange={(e) => {
                        setPassword(e.target.value);
                    }} />

                </PW>

                <PWS>
                    비밀번호 확인
                    <JoinPWS type="password" name="userpassword_confirm" value={passwordConfirm} placeholder="영어+숫자 6자 이상" onChange={(e) => {
                        setPasswordConfirm(e.target.value);
                    }} />
                </PWS>
                <Nicknames>
                    닉네임
                    <JoinNickname type="text" name="nickname" value={nickname} placeholder="2글자 이상" onChange={(e) => {
                        setNickname(e.target.value);
                    }} />
                </Nicknames>
                <Receive>
                    서비스 이용약관에 동의(필수)
                    <ReceiveInput type="checkbox" name="receive" checked={receiveAgreement} // Add checked attribute and link it to the receiveAgreement state
                        onChange={() => setReceiveAgreement(prev => !prev)} />
                    <ReceiveClick>
                        약관 보기
                        <img src="../image/arrowRight.png"></img>
                    </ReceiveClick>
                </Receive>
                <JoinButton onClick={() => {
                    handleJoinClick();
                }}>회원가입</JoinButton>
                <Bottom></Bottom>
            </JoinBackgrounds>
        </>
    );
}
const ErrorMessage = styled.div`
    font-size: 12px;
    color: red;
    padding-left: 30px;
    margin-bottom: 8px;
`;

export default Join