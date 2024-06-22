import { createSlice } from '@reduxjs/toolkit';
import { addGuitar } from './guitarsSlice';

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
  extraReducers: (builder) => {
    builder.addCase(addGuitar, (state) => {
      state.name = '';
      state.cost = 0;
    });
  },
});

export const formReducer = formSlice.reducer;
export const { changeCost, changeName } = formSlice.actions;
