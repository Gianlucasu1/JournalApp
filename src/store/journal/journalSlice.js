import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = "";
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state, action) => {
            state.isSaving = true;
            state.messageSaved = "";
            
        },
        updateNote: (state, action) => {
            console.log(action.payload);
            state.isSaving = false;
            state.notes = state.notes.map( (note) => {
                if(action.payload.id === note.id){
                    return action.payload;
                } else{
                    return note;
                }
            });

            state.messageSaved = "Fue actualizada correctamente.";
        },
        deleteNodeById: (state, action) => {

        },
    }
});

export const {
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNodeById,
    savingNewNote
} = journalSlice.actions;