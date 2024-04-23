import { createSlice } from "@reduxjs/toolkit";
// import history from "../history";
import axios from "axios";

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

export const addTask = (task, id) => async(dispatch) => {
  const taskData = {
    task,
    id,
  };

  const response = await axios.post("http://localhost:4000/task/add", taskData);
  if(response){
    localStorage.setItem('task', JSON.stringify(response.data));
    dispatch(taskAddedSuccessfully(response.data));
    window.location.reload();
  } else {
    dispatch(taskAddFailure())
  }
};

export const getAllTasks = (token, id) => async (dispatch) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		params: {
			id,
		},
	};

	try {
		const response = await axios.get(
			'http://localhost:4000/task/tasks',
			config
		);

		if (response) {
			dispatch(getAllTaskSuccess(response.data));
		}
	} catch (error) {
		if (error.response.status === 400) {
			dispatch(getAllTaskFailure());
		}
	}
};