import { configureStore } from "@reduxjs/toolkit";
import noteappSlice from "./noteapp/noteappSlice";

export const store = configureStore({
    reducer:{
        notesapp: noteappSlice
    }
})