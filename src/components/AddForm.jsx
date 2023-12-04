import React, { useState } from "react";
import styled from "styled-components";
import Button from "common/Button";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addLetter } from "redux/config/modules/lettersSlice";

export default function AddForm() {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("훈이");

  const onAddLetter = (event) => {
    event.preventDefault();
    if (!nickname || !content) return alert("닉네임과 입력값은 필수입니다");

    const newLetter = {
      id: uuid(),
      nickname,
      content,
      avatar: null,
      writedTo: member,
      createdAt: new Date(),
    };

    dispatch(addLetter(newLetter));
    setNickname("");
    setContent("");
  };
  return (
    <Form onSubmit={onAddLetter}>
      <InputWrapper>
        <label>닉네임</label>
        <input
          type="text"
          placeholder="최대 20글자까지 작성할 수 있습니다."
          maxLength={20}
          value={nickname}
          onChange={(event) => setNickname(event.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <label>내용</label>
        <textarea
          placeholder="최대 100글자까지 작성할 수 있습니다."
          maxLength={100}
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </InputWrapper>
      <SelectWrapper>
        <label>To</label>
        <select
          value={member}
          onChange={(event) => setMember(event.target.value)}
        >
          <option>훈이</option>
          <option>철수</option>
          <option>짱구</option>
          <option>맹구</option>
          <option>유리</option>
        </select>
      </SelectWrapper>
      <Button text="등록" />
    </Form>
  );
}

const Form = styled.form`
  background-color: #a8df8e;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 500px;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & label {
    width: 80px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }
  & input,
  textarea {
    width: 100%;
    border: 1px solid #eee;
    border-radius: 12px;
    padding: 10px;
    color: #333;
  }
  & textarea {
    resize: none;
  }
`;

const SelectWrapper = styled(InputWrapper)`
  justify-content: flex-start;

  & label {
    width: 70px;
  }

  & select {
    border-radius: 12px;
    border: 1px solid #eee;
    width: 60px;
    height: 25px;
    padding: 4px;
  }
`;
