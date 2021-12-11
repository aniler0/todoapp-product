import { useAppDispatch, useAppSelector } from "store";
import { Checked, Unchecked } from "icons";
import { Text } from "components";
import { Task, toggleTask } from "store/taskSlice";

import * as S from "./styles";

type TaskComponentType = {
  task: Task;
};

const TaskCard: React.FC<TaskComponentType> = ({ task }) => {
  const todos = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const toggle = () => {
    dispatch(toggleTask(todos.tasks, task.id));
  };
  return (
    <S.TaskWrapper>
      <S.TaskContainer>
        {task.completed ? (
          <Checked onClick={toggle} />
        ) : (
          <Unchecked onClick={toggle} />
        )}
        <Text type="medium" toggle={task.completed}>
          {task.task}
        </Text>
      </S.TaskContainer>
    </S.TaskWrapper>
  );
};

export default TaskCard;
