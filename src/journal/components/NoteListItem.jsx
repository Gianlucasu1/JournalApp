import React, { useMemo } from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Grid } from '@mui/material'
import { TurnedIn, TurnedInNot } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote } from '../../store/journal'

export const NoteListItem = ({ note }) => {

    const { active: activeNote } = useSelector(state => state.journal);

    const dispatch = useDispatch();

    const selectActiveNote = () => {
        dispatch(setActiveNote(note));
    }

    const newTitle = useMemo(() => {
        return note.title.length > 17
            ? note.title.substring(0, 17) + '...'
            : note.title;
    }, [note.title]);

    const newBody = useMemo(() => {
        return note.body.length > 30
            ? note.body.substring(0, 30) + '...'
            : note.body;
    }, [note.body]);

    return (
        <ListItem onClick={selectActiveNote} >
            <ListItemButton>
                <ListItemIcon>
                    { ( activeNote &&  activeNote.id === note.id) ? <TurnedIn /> : <TurnedInNot /> }
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle}></ListItemText>
                    <ListItemText secondary={newBody} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
