import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  guitars: [],
};

const guitarSlice = createSlice({
  name: 'guitar',
  initialState,
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addGuitar(state, action) {
      state.guitars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeGuitar(state, action) {
      const updated = state.guitars.filter((guitar) => {
        return guitar.id !== action.payload;
      });

      state.guitars = updated;
    },
  },
});

export const guitarReducer = guitarSlice.reducer;
export const { changeSearchTerm, addGuitar, removeGuitar } =
  guitarSlice.actions;
