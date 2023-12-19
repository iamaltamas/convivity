import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { questions } from "../util/QuestionDate";

export const countSlice = createSlice({
  name: "app",
  initialState: {
    data: [questions],
    loading: false,
    error: null,
  },

  reducers: {
    updateQuestion: (state, action) => {
      state.data[0]?.forEach((ele) => {
        if (ele.id === action.payload) {
          ele.rightAns = true;
          ele.notAttemptQus = false;
          ele.flag = false;
        }
        return ele;
      });
    },
    updateAttempts: (state, action) => {
      state.data[0]?.forEach((ele) => {
        if (ele.id === action.payload) {
          ele.attempts -= 1;
        }
        return ele;
      });
    },
    wrongAnswer: (state, action) => {
      state.data[0]?.forEach((ele) => {
        if (ele.id === action.payload) {
          ele.wrongAns = true;
          ele.notAttemptQus = false;
        }
        return ele;
      });
    },
    updateFlag: (state, action) => {
      state.data[0]?.forEach((ele) => {
        if (ele.id === action.payload) {
          ele.flag = true;
          ele.notAttemptQus = false;
        }
        return ele;
      });
    },
    Flag: (state, action) => {
      state.data[0]?.forEach((ele) => {
        if (ele.id === action.payload) {
          ele.flagId = ele.id;
        }
        return ele;
      });
    },
  },
});
export const { updateQuestion, updateAttempts, wrongAnswer, updateFlag, Flag } =
  countSlice.actions;
export default countSlice.reducer;
