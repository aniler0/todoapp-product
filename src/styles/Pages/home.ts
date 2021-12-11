import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  height: 100vh;
  width: 50%;
  background: #f9f3e5;
  border: 4px solid #33322e;
  box-shadow: 12px 12px 0px #33322e;
  border-radius: 24px;
`;
export const TasksWrapper = styled.div`
  border-top: 4px solid #33322e;
  overflow-y: auto;
  height: 100%;
  max-height: 80%;
  border-bottom: 4px solid #33322e;
`;
export const AddingTaskWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2em;
`;
export const SubmitForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 65%;
`;
export const Input = styled.input`
  background: transparent;
  font-size: 20px;
  width: 400px;
  padding: 0.5em;
  border: none;
  border-bottom: 4px solid #f6a89e;
  outline: none;
`;
export const HomeTitle = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  padding: 1em;
`;
