import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "store";
import { v4 as uuid } from "uuid";

export interface Task {
  id: string;
  task: string;
  completed: boolean;
}
interface InitialState {
  tasks: Task[];
}

const initialState: InitialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTask: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    setToggleTask: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    setDeletedTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
  },
});

export default taskSlice.reducer;
export const { setTask, setToggleTask, setDeletedTasks } = taskSlice.actions;

export const addTask =
  (todos: Task[], task: string) => async (dispatch: AppDispatch) => {
    const newState = [...todos];
    const newTask: Task = { id: uuid(), task: task, completed: false };
    newState.push(newTask);
    dispatch(setTask(newState));
  };
export const toggleTask =
  (todos: Task[], id: string) => async (dispatch: AppDispatch) => {
    const copiedTodos = [...todos];
    copiedTodos.forEach((copiedTodo, index) => {
      if (copiedTodo.id === id) {
        const updatedTodo = { ...copiedTodo, completed: !copiedTodo.completed };
        copiedTodos[index] = updatedTodo;
      }
    });
    dispatch(setToggleTask(copiedTodos));
  };

export const deleteTasks = (todos: Task[]) => async (dispatch: AppDispatch) => {
  const copiedTodos = [...todos];
  const onlyCompleted = copiedTodos.filter((task) => task.completed === false);

  dispatch(setDeletedTasks(onlyCompleted));
};
