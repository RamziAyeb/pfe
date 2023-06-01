import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const reservationAdd = createAsyncThunk("reservation/add", async (reservation) => {
    try {
      let result = await axios.post("http://localhost:5001/reservation/add", reservation);
      // console.log(result.data)
      return result.data;
    } catch (error) {
      console.log(error);
    }
    
  });
  
export const getReservation = createAsyncThunk("reservation/all", async (reservation) => {
  try {
    let result = await axios.get("http://localhost:5001/reservation/all", reservation);
    // console.log(result.data)
    return result.data;
  } catch (error) {
    console.log(error);
  }
  
});


//update reservation
export const updatReservation = createAsyncThunk(
  "reservation/update",
  async ({ id, reservation }) => {
    try {
      console.log(reservation);
      let result = axios.put(
        `http://localhost:5001/reservation/update/${id}`,
        reservation
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);


const initialState = {
    reservation: null,
    status: null,
  };
  export const reservationSlice = createSlice({
    name: "reservation",
    initialState,
    reducers: {},
    extraReducers: {
      //add reservation extra reducers
      [reservationAdd.pending]: (state) => {
        state.status = "loading...";
      },
      [reservationAdd.fulfilled]: (state, action) => {
        state.status = "success";
        //console.log("=========",action.payload);
        state.reservation = [action.payload.reservation, ...state.reservation];
        return state;
      },
       /////////////get reservation////////////////////////
       [getReservation.pending]: (state) => {
        state.status = "loading";
      },
      [getReservation.fulfilled]: (state, action) => {
        state.status = "fulfilled";
        // state.msg = action.payload.data.msg;
        state.reservation = action.payload.reservation;
      },
      [getReservation.rejected]: (state) => {
        state.status = "failed";
      },
    //   [createReservation.rejected]: (state) => {
    //     state.status = "fail";
    //   },
    //   /////////////get reservation////////////////////////
    //   [getReservation.pending]: (state) => {
    //     state.status = "loading";
    //   },
    //   [getReservation.fulfilled]: (state, action) => {
    //     state.status = "fulfilled";
    //     // state.msg = action.payload.data.msg;
    //     state.reservation = action.payload.reservation;
    //   },
    //   [getReservation.rejected]: (state) => {
    //     state.status = "failed";
    //   },
    //   /////////////delet reservation//////////////
    //   [deleteReservation.pending]: (state) => {
    //     state.status = "pending";
    //   },
    //   [deleteReservation.fulfilled]: (state,action) => {
    //     state.status = "fullfilled";
    //     console.log(action.payload)
    //   },
    //   [deleteReservation.rejected]: (state) => {
    //     state.status = "rejected";
    //   },
  
      ///////////update reservation///////////
      [updatReservation.pending]: (state) => {
        state.status = "pending";
      },
      [updatReservation.fulfilled]: (state) => {
        state.status = "fullfilled";
      },
      [updatReservation.rejected]: (state) => {
        state.status = "rejected";
      },
    },
  });
  
  export default reservationSlice.reducer;
  