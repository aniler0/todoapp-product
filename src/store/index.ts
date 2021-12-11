import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import taskSlice from "./taskSlice";

export const store = configureStore({
  //we assign all slicers which has reducers in the configureStore object.
  reducer: {
    tasks: taskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>; //gets types from slices and combine all types inside of rootstate.
export type AppDispatch = typeof store.dispatch; //type of dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
