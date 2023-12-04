import React from "react";
import styled from "styled-components";
import { useState } from "react";
import uuid from "react-uuid";
import { signupUser } from "redux/config/modules/authorSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function Register({ toggleForm }) {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const isFormValid = userId !== "" && password !== "" && nickname !== "";

  const onRegisterUser = (event) => {
    event.preventDefault();

    axios.post("http//localhost:4000/");

    if (!userId || !password || !nickname)
      return alert("닉네임과 입력값은 필수입니다");

    const newUser = {
      id: uuid(),
      userId,
      password,
      nickname,
    };

    dispatch(signupUser(newUser));
    setNickname("");
    setUserId("");
    setPassword("");
  };

  return (
    <SignupForm>
      <Title>
        <h1>회원가입</h1>
      </Title>
      <InputWrapper>
        <div>
          <label>아이디</label>
          <input
            type="text"
            placeholder="아이디 (4~10글자)"
            minLength={4}
            maxLength={10}
            required
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호 (4~15글자)"
            minLength={4}
            maxLength={15}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>닉네임</label>
          <input
            type="text"
            placeholder="닉네임 (1~10글자)"
            minLength={1}
            maxLength={10}
            required
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
      </InputWrapper>
      <ButtonWrapper>
        <SignUpButton onClick={onRegisterUser} disabled={!isFormValid}>
          등록
        </SignUpButton>
        <LoginButton onClick={toggleForm}>로그인</LoginButton>
      </ButtonWrapper>
    </SignupForm>
  );
}

const Title = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: #ffc436 2px solid;
`;

const SignupForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 350px;
  background-color: #ffe17b;
  height: 400px;
  border-radius: 12px;
  padding: 20px;
  gap: 16px;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  & label {
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 6px;
  }

  & input {
    width: 100%;
    border: 1px solid #eee;
    border-radius: 12px;
    height: 36px;
    color: #333;
    padding: 10px;
    font-size: 12px;
  }
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transition: all 0.2s;

  & :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 30px;
  color: white;
  background-color: #f36b6b;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 800;
  font-family: "Dovemayo_gothic";
`;
const SignUpButton = styled(LoginButton)`
  background-color: #78c1f3;
`;
