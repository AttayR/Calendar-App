import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface Event {
  date: string;
  description: string;
}

interface CalendarState {
  events: Record<string, Event[]>;
  loading: boolean;
}

const initialState: CalendarState = {
  events: {},
  loading: false,
};

export const fetchEvents = createAsyncThunk(
  'calendar/fetchEvents',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    const formattedData = response.data
      .slice(0, 5)
      .map((item: any, index: number) => ({
        date: `2025-03-0${index + 1}`,
        description: item.title,
      }));
    return formattedData;
  },
);

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchEvents.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.loading = false;
      action.payload.forEach((event: Event) => {
        if (!state.events[event.date]) {
          state.events[event.date] = [];
        }
        state.events[event.date].push(event);
      });
    });
    builder.addCase(fetchEvents.rejected, state => {
      state.loading = false;
    });
  },
});

export default calendarSlice.reducer;
