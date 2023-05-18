import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//add feedback
export const createFeedback = createAsyncThunk("feedback/add", async (feedback) => {
  try {
    let result = await axios.post(
      `http://localhost:5000/feedback/add`,
      feedback
    );
    // console.log(result.data)
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

//get feedback 
export const getFeedback = createAsyncThunk(
  "feedback/get",
  async () => {
    try {
      let result = await axios.get(
        `http://localhost:5000/feedback/all/`,
        
      );
      console.log(result);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//delet feedback
export const deleteFeedback = createAsyncThunk("feedback/delete", async ({id}) => {
  try {
    let result =await axios.delete(`http://localhost:5000/feedback/delete/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});


//update feedback
export const updatFeedback = createAsyncThunk(
  "feedback/update",
  async ({ id, feedback }) => {
    try {
      console.log(feedback);
      let result = axios.put(
        `http://localhost:5000/feedback/update/${id}`,
        feedback
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);


const initialState = {
  feedback: null,
  status: null,
};
export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},
  extraReducers: {
    //add feedback extra reducers
    [createFeedback.pending]: (state) => {
      state.status = "loading...";
    },
    [createFeedback.fulfilled]: (state, action) => {
      state.status = "success";
      //console.log("=========",action.payload);
      state.feedback = [action.payload.feedback, ...state.feedback];
      return state;
    },
    [createFeedback.rejected]: (state) => {
      state.status = "fail";
    },
    /////////////get feedback////////////////////////
    [getFeedback.pending]: (state) => {
      state.status = "loading";
    },
    [getFeedback.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      // state.msg = action.payload.data.msg;
      state.feedback = action.payload.feedbacks;
    },
    [getFeedback.rejected]: (state) => {
      state.status = "failed";
    },
    /////////////delet feedback//////////////
    [deleteFeedback.pending]: (state) => {
      state.status = "pending";
    },
    [deleteFeedback.fulfilled]: (state,action) => {
      state.status = "fullfilled";
      console.log(action.payload)
    },
    [deleteFeedback.rejected]: (state) => {
      state.status = "rejected";
    },

    ///////////update feedback///////////
    [updatFeedback.pending]: (state) => {
      state.status = "pending";
    },
    [updatFeedback.fulfilled]: (state) => {
      state.status = "fullfilled";
    },
    [updatFeedback.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default feedbackSlice.reducer;
