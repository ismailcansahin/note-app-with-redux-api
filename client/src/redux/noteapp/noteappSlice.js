import { createSlice } from "@reduxjs/toolkit";
import { addNotesAppAsync, deleteNotesAppAsync, getNotesAppAsync, updateNotesAppAsync } from "./service";

export const noteappSlice = createSlice({
    name: 'notesapp',
    initialState: {
        items: [],
        filterText: '',
        selectedItem: {},
    },
    reducers:{
        search: (state, action) => {
            state.filterText = action.payload;
        },
        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload;
        }

    },
    extraReducers: {
        [getNotesAppAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
        [addNotesAppAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload);
        },
        [updateNotesAppAsync.fulfilled]: (state, action) => {
            const { id } = action.payload;
            const index = state.items.findIndex((item) => item.id === id)
            state.items[index] = action.payload;
        },
        [deleteNotesAppAsync.fulfilled]: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id)
            state.items = filtered 
        },
    }
})

export default noteappSlice.reducer;
export const { search, setSelectedItem } = noteappSlice.actions;

    // const id = req.params.id;
    // const {title, note, color} = req.body;
    // const index = notesapp.findIndex((note) => note.id == id);