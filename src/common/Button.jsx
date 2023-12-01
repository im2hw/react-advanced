import React from "react";
import styled from "styled-components";

export default function Button({ text, onClick = () => {} }) {
  return (
    <ButtonWrapper>
      <button onClick={onClick}>{text}</button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & button {
    width: 80px;
    height: 30px;
    border-radius: 12px;
    border: none;
    background-color: #ffc46c;
  }
`;
