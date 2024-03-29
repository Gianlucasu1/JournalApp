import { async } from "@firebase/util";
import { doc, collection, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../journal/helpers";
import { addNewEmptyNote, setActiveNote,savingNewNote,setNotes, setSaving, updateNote } from "./journalSlice";

export const startNewNote = () => {
    return async( dispatch, getState ) => {
        dispatch( savingNewNote() );
        const { uid } = getState().auth;

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
        const currentNotes = await loadNotes( uid );
        dispatch( setNotes( currentNotes) );
    }
}

export const startSaveNote = () => {
    return async( dispatch,getState )=> {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const {active:note} = getState().journal;
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}` );
        await setDoc(docRef, noteToFirestore, { merge:true });

        dispatch( updateNote( note ) );
        
    }
}