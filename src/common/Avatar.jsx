import React from "react";
import avatar from "assets/pngwing.com.png";
import styled, { css } from "styled-components";

export default function Common({ src, size }) {
  return (
    <AvatarFigure size={size}>
      <img src={src ?? avatar} alt="아바타 이미지" />
    </AvatarFigure>
  );
}

const AvatarFigure = styled.figure`
  ${(props) => {
    switch (props.size) {
      case "large":
        return css`
          width: 70px;
          height: 70px;
        `;
      default:
        return css`
          width: 50px;
          height: 50px;
        `;
    }
  }}

  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
