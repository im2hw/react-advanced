import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "common/Button";

export default function Header() {
  return (
    <Container>
      <Title>떡잎 방범대 친구들에게 편지를 보내주세요!</Title>
      <ButtonWrapper>
        <Link to="/login">
          <Button text={"login"} />
        </Link>
        <Link to="/userDetails">
          <Button text={"my page"} />
        </Link>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffe17b;
  padding: 12px;
  border-radius: 12px;
`;
const Title = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  transition: all 0.2s;

  & :hover {
    transform: scale(1.02);
  }
`;
