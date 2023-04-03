import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let result = await axios.post("http://localhost:5001/user/register", user);
    // console.log(result.data)
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let result = await axios.post("http://localhost:5001/user/login", user);
    // console.log(result.data)
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let result = await axios.get("http://localhost:5001/user/current", {headers:{
      Authorization:localStorage.getItem ("token"),
    },
  
  });
    // console.log(result.data)
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
//update user
export const updateUser = createAsyncThunk(
  "user/update",
  async ({ id, user }) => {
    try {
      // console.log(user);
      let result = axios.put(`http://localhost:5001/user/update/${id}`, user);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState= {
 user:null,
 status:null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    //register extra reducers
    [userRegister.pending]: (state) => {
      state.status = "loading";
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = "success";
      //console.log("=========",action.payload);
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
      return state;
    },
    [userRegister.rejected]: (state) => {
      state.status = "fail";
    },
    //login extra reducers
    [userLogin.pending]: (state) => {
      state.status = "loading";
    },
    [userLogin.fulfilled]: (state, action) => {
      state.status = "success";
      //console.log("=========",action.payload);
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
      return state;
    },
    [userLogin.rejected]: (state) => {
      state.status = "fail";
    },
    //login extra reducers
    [userCurrent.pending]: (state) => {
      state.status = "loading";
    },
    [userCurrent.fulfilled]: (state, action) => {
      state.status = "success";
      //console.log("=========",action.payload);
      state.user = action.payload?.user;
      //localStorage.setItem("token", action.payload.token);
      return state;
    },
    [userCurrent.rejected]: (state) => {
      state.status = "fail";
    },

    ///////////update user///////////
    [updateUser.pending]: (state) => {
      state.status = "pending";
    },
    [updateUser.fulfilled]: (state) => {
      state.status = "fullfilled";
    },
    [updateUser.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});
// Action creators are generated for each case reducer function
 export const {logout} = userSlice.actions

export default userSlice.reducer
