import React from "react";
import styled from "styled-components";
import Header from "components/Header";
import AddForm from "components/AddForm";
import LetterList from "components/LetterList";
import { useState } from "react";

function Home({ letters, setLetters }) {
  const [activeMember, setActiveMember] = useState("훈이");
  console.log(activeMember);
  return (
    <Container>
      {/* props drilling */}
      <Header activeMember={activeMember} setActiveMember={setActiveMember} />
      <AddForm setLetters={setLetters} />
      <LetterList activeMember={activeMember} letters={letters} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: lightyellow;
  align-items: center;
  height: 100vh;
`;

export default Home;
