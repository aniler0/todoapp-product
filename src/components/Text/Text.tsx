import * as S from "./styles";

interface TextType {
  children: string;
  type: "small" | "medium" | "large";
}

const Text: React.FC<TextType> = ({ children, type }) => {
  return (
    <S.TextContainer>
      <S.Text type={type}>{children}</S.Text>
    </S.TextContainer>
  );
};

export default Text;
