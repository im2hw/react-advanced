import React from "react";
import LetterCard from "./LetterCard";
import styled from "styled-components";

function LetterList({ activeMember, letters }) {
  const filteredLetters = letters.filter(
    (letter) => letter.writedTo === activeMember
  );

  return (
    <ListWrapper>
      {filteredLetters.length === 0 ? (
        <p>
          <span>{activeMember}</span>에게 남겨진 편지가 없습니다!
        </p>
      ) : (
        filteredLetters.map((letter) => (
          <LetterCard key={letter.id} letter={letter} />
        ))
      )}
    </ListWrapper>
  );
}

export default LetterList;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  border-radius: 12px;
  padding: 12px;
  color: white;
  background-color: lightsalmon;

  & span {
    font-weight: bold;
  }
`;
