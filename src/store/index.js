import { configureStore } from '@reduxjs/toolkit';
import {
  guitarReducer,
  addGuitar,
  removeGuitar,
  changeSearchTerm,
} from './slices/guitarsSlice';
import { formReducer, changeCost, changeName } from './slices/formSlice';

const store = configureStore({
  reducer: {
    guitars: guitarReducer,
    form: formReducer,
  },
});

export {
  store,
  addGuitar,
  removeGuitar,
  changeSearchTerm,
  changeCost,
  changeName,
};
