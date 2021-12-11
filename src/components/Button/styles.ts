import styled from "styled-components";

type ButtonType = {
  secondary?: boolean;
};

export const Button = styled.button<ButtonType>`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  padding: 0.5em 1em;
  font-size: 1em;
  background: ${({ secondary }) => (secondary ? "#F6A89E" : "#d0f4f0")};
  border: 4px solid #33322e;
  box-shadow: 4px 4px 0px #33322e;
  border-radius: 24px;
  cursor: pointer;
`;
