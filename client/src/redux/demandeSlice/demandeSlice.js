import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//add demande
export const createDemande = createAsyncThunk("demande/add", async (demande) => {
  try {
    let result = await axios.post(`http://localhost:5000/demande/add`, demande);
    // console.log(result.data)
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

//get demande 
export const getDemande = createAsyncThunk(
  "demande/get",
  async () => {
    try {
      let result = await axios.get(`http://localhost:5000/demande/all`);
      console.log(result);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//delet demande
export const deleteDemande = createAsyncThunk("demande/delete", async ({id}) => {
  try {
    let result = await axios.delete(
      `http://localhost:5000/demande/delete/${id}`
    );
    return result.data;
  } catch (error) {
    console.log(error);
  }
});


//update demande
export const updatDemande = createAsyncThunk(
  "demande/update",
  async ({ id, demande }) => {
    try {
      console.log(demande);
      let result = axios.put(
        `http://localhost:5000/demande/update/${id}`,
        demande
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);


const initialState = {
  demande: null,
  status: null,
};
export const demandeSlice = createSlice({
  name: "demande",
  initialState,
  reducers: {},
  extraReducers: {
    //add demande extra reducers
    [createDemande.pending]: (state) => {
      state.status = "loading...";
    },
    [createDemande.fulfilled]: (state, action) => {
      state.status = "success";
      //console.log("=========",action.payload);
      state.demande = [action.payload.demande, ...state.demande];
      return state;
    },
    [createDemande.rejected]: (state) => {
      state.status = "fail";
    },
    /////////////get demande////////////////////////
    [getDemande.pending]: (state) => {
      state.status = "loading";
    },
    [getDemande.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      // state.msg = action.payload.data.msg;
      state.demande = action.payload.demandes;
    },
    [getDemande.rejected]: (state) => {
      state.status = "failed";
    },
    /////////////delet demande//////////////
    [deleteDemande.pending]: (state) => {
      state.status = "pending";
    },
    [deleteDemande.fulfilled]: (state,action) => {
      state.status = "fullfilled";
      console.log(action.payload)
    },
    [deleteDemande.rejected]: (state) => {
      state.status = "rejected";
    },

    ///////////update demande///////////
    [updatDemande.pending]: (state) => {
      state.status = "pending";
    },
    [updatDemande.fulfilled]: (state) => {
      state.status = "fullfilled";
    },
    [updatDemande.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default demandeSlice.reducer;
