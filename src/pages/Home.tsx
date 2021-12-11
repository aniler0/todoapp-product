import { Task, Text } from "components";
import { Button } from "components/Button/styles";
import * as S from "styles/Pages/home";

const Home = () => {
  return (
    <S.HomeContainer>
      <S.HomeTitle>
        <Text type="large">To Do List</Text>
      </S.HomeTitle>
      <S.TasksWrapper>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </S.TasksWrapper>
      <S.AddingTaskWrapper>
        <S.SubmitForm>
          <S.Input type="text" placeholder="Enter Task" />
          <Button>Submit</Button>
        </S.SubmitForm>
        <Button secondary>Clear Completed</Button>
      </S.AddingTaskWrapper>
    </S.HomeContainer>
  );
};

export default Home;
