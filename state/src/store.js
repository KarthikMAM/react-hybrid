import { createStore } from "redux";
import { helloWorld } from "./reducers";

export const store = (initialState = "") => createStore(helloWorld, initialState);