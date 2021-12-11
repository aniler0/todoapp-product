import * as S from "./styles";

interface TextType {
  children: string;
  secondary?: boolean;
}

const Button: React.FC<TextType> = ({ children, secondary }) => {
  const disabled = false;
  return (
    <S.Button secondary={secondary} disabled={disabled ? true : false}>
      {children}
    </S.Button>
  );
};

export default Button;
