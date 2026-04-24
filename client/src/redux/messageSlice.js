import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import messageService from "./messageService";

const initialState = {
  loading: false,
  error: null,
  success: "",
  messages: [],
  message: {},
};

export const createMessage = createAsyncThunk(
  "message/create",
  async ({ fullName, email, phone, message }) => {
    const response = await messageService.createMessage({
      fullName,
      email,
      phone,
      message,
    });

    return response.data;
  }
);

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    successState(state) {
      state.success = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // CREATE message
      .addCase(createMessage.pending, (state, action) => {
        // console.log("createMessage.pending", action.payload);
        state.loading = true;
      })
      .addCase(createMessage.fulfilled, (state, action) => {
        console.log("createMessage.fulfilled", action.payload);
        state.loading = false;
        state.success = action.payload.success;
        state.message = action.payload.message;
        state.messages.push(action.payload.message);
      })
      .addCase(createMessage.rejected, (state, action) => {
        console.log("createMessage.rejected", action.payload, action.error);
        state.loading = false;
        state.success = "negative"
      });
  },
});

export const { successState } = messageSlice.actions;
export default messageSlice.reducer;


