import { createSlice } from "@reduxjs/toolkit";
// import history from "../history";
// import axios from "axios";

const initialTask = localStorage.getItem("task")
  ? JSON.parse(localStorage.getItem("task"))
  : null;

const initialState = {
  TaskData: initialTask,
  AllTasks: {},
};

export const taskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {
    taskAddedSuccessfully: (state, action) => {
      state.TaskData = action.payload;
    },
    taskAddFailure: (state) => {
      return state;
    },
    getAllTaskSuccess: (state, action) => {
      state.AllTasks = action.payload;
    },
    getAllTaskFailure: (state) => {
      return state;
    },
    editTaskSuccess: (state, action) => {
      state.TaskData = action.payload;
    },
    editTaskFailure: (state) => {
      return state;
    },
    deleteSuccess: (state, action) => {
      state.TaskData = action.payload;
    },
    deleteFailure: (state) => {
      return state;
    },
  },
});

export const {
  taskAddedSuccessfully,
  taskAddFailure,
  getAllTaskSuccess,
  getAllTaskFailure,
  editTaskSuccess,
  editTaskFailure,
  deleteSuccess,
  deleteFailure,
} = taskSlice.actions;

export default taskSlice.reducer;