import { createSlice } from '@reduxjs/toolkit';
import { sendMessageThunk, listenMessagesThunk } from './firebaseThunks';

const firebaseSlice = createSlice({
  name: 'firebase',
  initialState: {
    messages: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listenMessagesThunk.fulfilled, (state, action) => {
        state.messages = action.payload;
      });
  },
});

export default firebaseSlice.reducer;
