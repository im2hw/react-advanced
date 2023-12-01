import React from "react";
import styled, { css } from "styled-components";

import 맹구 from "../assets/맹구.webp";
import 짱구 from "../assets/신짱구.png";
import 유리 from "../assets/유리.webp";
import 철수 from "../assets/철수.webp";
import 훈이 from "../assets/훈이.webp";

function Tabs({ activeMember, setActiveMember, letters }) {
  const onActiveMember = (event) => {
    if (event.target === event.currentTarget) return;

    const imageData = event.target.getAttribute("data-image-info");

    setActiveMember(imageData);
  };

  return (
    <TabsWrapper onClick={onActiveMember}>
      <li>
        <img src={훈이} alt="훈이 이미지" data-image-info="훈이" />
        <h3>훈이</h3>
      </li>
      <li>
        <img src={철수} alt="철수 이미지" data-image-info="철수" />
        <h3>철수</h3>
      </li>
      <li>
        <img src={짱구} alt="짱구 이미지" data-image-info="짱구" />
        <h3>짱구</h3>
      </li>
      <li>
        <img src={맹구} alt="맹구 이미지" data-image-info="맹구" />
        <h3>맹구</h3>
      </li>
      <li>
        <img src={유리} alt="유리 이미지" data-image-info="유리" />
        <h3>유리</h3>
      </li>
    </TabsWrapper>
  );
}

const TabsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  padding: 12px;
  gap: 12px;
  border-radius: 12px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  img {
    width: 100px;
    height: 130px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.04);
    }
  }
  h3 {
    font-size: 0.9rem;
    font-weight: 800;
    cursor: pointer;
  }
`;

const Tab = styled.li`
  ${(props) => {
    if (props.$activeMember === props.children) {
      return css`
        background-color: orange;
        color: black;
      `;
    }
    return css`
      background-color: #eee;
      color: #333;
    `;
  }}

  font-size: 20px;
  width: 65px;
  text-align: center;
  padding: 10px 6px;
  border-radius: 12px;
  cursor: pointer;
`;

export default Tabs;
