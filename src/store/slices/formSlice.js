import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  const: 0,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
});

export const formReducer = formSlice.reducer;
export const { changeCost, changeName } = formSlice.actions;
