import * as S from "./styles";

interface TextType {
  children: string;
  type: "small" | "medium" | "large";
  toggle?: boolean;
}

const Text: React.FC<TextType> = ({ children, type, toggle }) => {
  return (
    <S.TextContainer>
      <S.Text type={type} toggle={toggle}>
        {children}
      </S.Text>
    </S.TextContainer>
  );
};

export default Text;
