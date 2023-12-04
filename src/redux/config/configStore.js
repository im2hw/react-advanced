import { configureStore } from "@reduxjs/toolkit";
import letters from "./modules/lettersSlice";
import member from "./modules/memberSlice";

const store = configureStore({
  reducer: { letters: letters, member: member },
});

export default store;
