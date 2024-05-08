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
    // statusUpdateSuccess: (state, action) => {

    // },
    // statusUpdateFailure: (state, action) => {

    // },
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

export const addTask = (task, id) => async (dispatch) => {
  const taskData = {
    task,
    id,
  };

  const response = await axios.post("https://magpie-more-monkfish.ngrok-free.app/task/add", taskData);
  if (response) {
    localStorage.setItem("task", JSON.stringify(response.data));
    dispatch(taskAddedSuccessfully(response.data));
    window.location.reload();
  } else {
    dispatch(taskAddFailure());
  }
};

export const getAllTasks = (token, id) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    params: { id },
  };

  try {
    const response = await axios.get(
      "https://magpie-more-monkfish.ngrok-free.app/task/tasks",
      config
    );
    console.log("Response:", response);

    if (response && response.data) {
      dispatch(getAllTaskSuccess(response.data));
    } else {
      console.log("Invalid response:", response);
      dispatch(getAllTaskFailure());
    }
  } catch (error) {
    console.log("Error:", error);
    if (error.response) {
      console.log("Error response:", error.response);
    }
    dispatch(getAllTaskFailure());
  }
};

export const arrowClick = (item, string) => async() => {
  let taskData = {
    id: item._id,
    string: string,
  };
  try {
    const response = await axios.put(
      `https://magpie-more-monkfish.ngrok-free.app/task/${taskData.id}`,
      taskData
    );
    if(response){
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteItem = (id) => async(dispatch) => {
  let response = await axios.delete(`https://magpie-more-monkfish.ngrok-free.app/task/${id}`);
  if(response){
    dispatch(deleteSuccess());
    window.location.reload();
  } else {
    dispatch(deleteFailure());
  }
}