import React from "react";
import Tabs from "./Tabs";
import styled from "styled-components";

export default function Header({ activeMember, setActiveMember }) {
  return (
    <Container>
      <Title>떡잎 방범대 친구들에게 편지를 보내주세요!</Title>
      <Tabs activeMember={activeMember} setActiveMember={setActiveMember} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  display: flex;
  align-items: center;

  height: 30px;
`;
