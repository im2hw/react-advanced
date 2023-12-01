import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Avatar from "common/Avatar";
import { getFormattedDate } from "util/data";
import Button from "common/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

function Details({ letters, setLetters }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { avatar, nickname, createdAt, writedTo, content } = letters.find(
    (letter) => letter.id === id
  );

  const onDeleteBtn = () => {
    const answer = window.confirm("정말 삭제하시겠습니까?");
    if (!answer) return;
    const newLetters = letters.filter((letter) => letter.id !== id);
    navigate("/");
    setLetters(newLetters);
  };

  const onEditedDone = () => {
    if (!editingText) return alert("수정사항이 없습니다.");

    const newLetters = letters.map((letter) => {
      if (letter.id === id) {
        return { ...letter, content: editingText };
      }
      return letter;
    });
    setLetters(newLetters);
    setIsEditing(false);
    setEditingText("");
  };

  return (
    <Container>
      <Link to="/">
        <HomeButton>
          <Button text="홈으로" />
        </HomeButton>
      </Link>
      <DetailWrapper>
        <UserInfo>
          <AvatarAndNickName>
            <Avatar src={avatar} size={"large"} />
            <NickName>{nickname}</NickName>
          </AvatarAndNickName>
          <time>{getFormattedDate(createdAt)}</time>
        </UserInfo>
        <ToMember>To. {writedTo}</ToMember>
        {isEditing ? (
          <>
            <Textarea
              autoFocus
              defaultValue={content}
              onChange={(event) => setEditingText(event.target.value)}
            />
            <ButtonWrapper>
              <Button text="취소" onClick={() => setIsEditing(false)} />
              <Button text="수정 완료" onClick={onEditedDone} />
            </ButtonWrapper>
          </>
        ) : (
          <>
            <Content>{content}</Content>
            <ButtonWrapper>
              <Button text="수정" onClick={() => setIsEditing(true)} />
              <Button text="삭제" onClick={onDeleteBtn} />
            </ButtonWrapper>
          </>
        )}
      </DetailWrapper>
    </Container>
  );
}

export default Details;

// params : Object (=> {id: 입력한 정보})

// 구조 분해 할당으로 param => {id}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightyellow;
`;

const HomeButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const DetailWrapper = styled.div`
  background-color: lightsalmon;
  color: black;
  padding: 12px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  width: 700px;
  min-height: 400px;
  border-radius: 12px;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AvatarAndNickName = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NickName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const ToMember = styled.span`
  font-size: 14px;
`;

const Content = styled.p`
  font-size: 14px;
  line-height: 30px;
  background-color: #f8f0e5;
  border-radius: 12px;
  padding: 10px;
  height: 200px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const Textarea = styled.textarea`
  font-size: 14px;
  line-height: 30px;
  background-color: #f8f0e5;
  border-radius: 12px;
  padding: 10px;
  height: 200px;
  resize: none;
  color: #333;
`;
