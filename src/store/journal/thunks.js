import { async } from "@firebase/util";
import { doc, collection, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote,savingNewNote } from "./journalSlice";

export const startNewNote = () => {
    return async( dispatch, getState ) => {
        dispatch( savingNewNote() );
        const { uid } = getState().auth;
        console.log(uid);

        const newNote= {
            title:'',
            body:'',
            date: new Date().getTime()
        }

        const newDoc =  doc( collection( FirebaseDB, `${ uid }/journal/notes`))
        await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote) );
    }
}

export const startLoadingNotes = () => {
    return async(dispatch,getState) => {
        const { uid } = getState().auth;    
    }
}