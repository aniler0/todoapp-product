import { Text } from "components";
import { Checked, Unchecked } from "icons";
import { Task } from "store/taskSlice";
import * as S from "./styles";

type TaskComponentType = {
  task: Task;
};

const TaskCard: React.FC<TaskComponentType> = ({ task }) => {
  return (
    <S.TaskWrapper>
      <S.TaskContainer>
        {task.completed ? <Checked /> : <Unchecked />}
        <Text type="medium">{task.task}</Text>
      </S.TaskContainer>
    </S.TaskWrapper>
  );
};

export default TaskCard;
