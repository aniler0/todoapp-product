import { TaskCard, Text } from "components";
import { Button } from "components/Button/styles";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { addTask, deleteTasks } from "store/taskSlice";
import * as S from "styles/Pages/home";

const Home = () => {
  const [task, setTask] = useState("");
  const todos = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addTask(todos.tasks, task));
    setTask("");
  };

  return (
    <S.HomeContainer>
      <S.HomeTitle>
        <Text type="large">To Do List</Text>
      </S.HomeTitle>
      <S.TasksWrapper>
        {todos.tasks.map((task, key) => (
          <TaskCard key={key} task={task} />
        ))}
      </S.TasksWrapper>
      <S.AddingTaskWrapper>
        <S.SubmitForm onSubmit={handleSubmit}>
          <S.Input
            onChange={(e) => setTask(e.target.value)}
            value={task}
            type="text"
            placeholder="Enter Task"
          />
          <Button>Submit</Button>
        </S.SubmitForm>
        <Button secondary onClick={() => dispatch(deleteTasks(todos.tasks))}>
          Clear Completed
        </Button>
      </S.AddingTaskWrapper>
    </S.HomeContainer>
  );
};

export default Home;
