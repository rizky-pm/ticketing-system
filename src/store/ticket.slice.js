import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllTickets } from '../api';

const initialState = {
  isFetching: false,
  tickets: [],
  error: null,
};

export const fetchTickets = createAsyncThunk(
  'ticket/fetchTickets',
  async () => {
    return await getAllTickets();
  }
);

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTickets.pending, (state) => {
      state.isFetching = true;
    });

    builder.addCase(fetchTickets.fulfilled, (state, action) => {
      state.isFetching = false;
      state.tickets = action.payload.data.datas;
    });

    builder.addCase(fetchTickets.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error.message;
    });
  },
});

export default ticketSlice.reducer;
