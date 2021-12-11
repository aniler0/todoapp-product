import { Text } from "components";
import { Checked } from "icons";
import * as S from "./styles";

const Task = () => {
  return (
    <S.TaskWrapper>
      <S.TaskContainer>
        <Checked />
        <Text type="medium">1</Text>
      </S.TaskContainer>
    </S.TaskWrapper>
  );
};

export default Task;
