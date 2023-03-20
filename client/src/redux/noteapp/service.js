import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getNotesAppAsync = createAsyncThunk('notesapp/getNotesAppAsync', async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/notesapp`);
    return res.data;
});

export const addNotesAppAsync = createAsyncThunk('notesapp/addNotesAppAsync', async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/notesapp`, data);
    return res.data;
})

export const updateNotesAppAsync = createAsyncThunk('notesapp/updateNotesAppAsync', async (data) => {
    const newData = { title: data.title, note: data.note, color: data.color, }
    const res = await axios.patch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/notesapp/${data.id}`, newData);
    return res.data;

})

export const deleteNotesAppAsync = createAsyncThunk('notesapp/deleteNotesAppAsync', async (data) => {
    await axios.delete(`${process.env.REACT_APP_API_BASE_ENDPOINT}/notesapp/${data}`);
    return data;
})

