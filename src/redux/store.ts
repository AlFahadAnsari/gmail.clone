import { configureStore } from "@reduxjs/toolkit";
import sliceApp from "./sliceApp";

const Store = configureStore({
  reducer: {
    model: sliceApp,
  },
});

export default Store;
