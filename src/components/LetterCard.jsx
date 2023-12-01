import React from "react";
import styled from "styled-components";
import Avatar from "../common/Avatar";
import { useNavigate } from "react-router-dom";
import { getFormattedDate } from "util/data";

export default function LetterCard({ letter }) {
  const navigate = useNavigate();

  return (
    <LetterWrapper onClick={() => navigate(`/details/${letter.id}`)}>
      <UserInfo>
        <Avatar src={letter.avatar} />
        <NickNameAndDate>
          <p>{letter.nickname}</p>
          <time>{getFormattedDate(letter.createdAt)}</time>
        </NickNameAndDate>
      </UserInfo>
      <Content>{letter.content}</Content>
    </LetterWrapper>
  );
}

const LetterWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border: 1px solid white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const UserInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const NickNameAndDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  & p {
    font-weight: bold;
  }
`;

const Content = styled.p`
  background-color: #ffffff;
  border-radius: 6px;
  height: 36px;
  margin-left: 62px;
  padding: 12px;
  font-size: 0.8rem;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
