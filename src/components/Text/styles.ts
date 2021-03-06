import styled, { css } from "styled-components";

interface Type {
  type: "small" | "medium" | "large";
  toggle?: boolean;
}

export const TextContainer = styled.div`
  width: 100%;
`;
export const Text = styled.h1<Type>`
  ${({ type }) =>
    type === "small" &&
    css`
      font-size: 10px;
      font-weight: 300;
    `}
  ${({ type, toggle }) =>
    type === "medium" &&
    css`
      font-size: 30px;
      font-weight: 400;
      margin-left: 10px;
      color: #33322e;
      text-decoration: ${toggle && "line-through"};
    `}

    
    ${({ type }) =>
    type === "large" &&
    css`
      font-size: 60px;
      font-weight: 700;
      text-align: center;
      color: #33322e;
    `}
`;
