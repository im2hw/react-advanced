import React from "react";
import styled from "styled-components";
import Tabs from "components/Tabs";
import Header from "components/Header";
import AddForm from "components/AddForm";
import LetterList from "components/LetterList";

function Home() {
  return (
    <Container>
      <Header />
      <Tabs />
      <AddForm />
      <LetterList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;

export default Home;
