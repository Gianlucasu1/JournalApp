import { SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography, useForkRef } from '@mui/material'
import {React,useEffect,useMemo, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImageGallery } from '../components/ImageGallery'
import { useForm } from '../../hooks/useForm'
import { setActiveNote, startSaveNote } from '../../store/journal'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active, messageSaved,isSaving } = useSelector(state => state.journal);

    const { id, body, onInputChange, title, date, formState } = useForm(active);

    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date]);

    const fileInputRef = useRef();

    useEffect(() => {
      dispatch( setActiveNote( formState ) );
    }, [ formState ])
    
    useEffect(() => {
      if(messageSaved.length > 0){
        Swal.fire(active.title, messageSaved, 'success');
      }
    }, [messageSaved]);
    

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    const onFileInputChange = ({target}) => {
        console.log(target.files);
        if(target.files === 0) return;
        console.log("subiendo archivos");
    }

    

    return (
        <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }} alignItems='center'>

            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>
            <Grid item>

                <input ref={fileInputRef} type="file" multiple onChange={onFileInputChange} style={{display:'none'}} />

                <IconButton
                color='primary'
                disabled={isSaving}
                onClick={() => fileInputRef.current.click() }
                >
                    <UploadOutlined />
                </IconButton>

                <Button onClick={onSaveNote} color='primary' sx={{ p: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>

            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    name='title'
                    onChange={onInputChange}
                    value={title}
                    variant='filled'
                    fullWidth
                    placeholder='Ingrese un titulo'
                    label='titulo'
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField
                    name='body'
                    onChange={onInputChange}
                    type='text'
                    variant='filled'
                    value={body}
                    fullWidth
                    multiline
                    placeholder='Que sucedio hoy?'
                    sx={{ border: 'none', mb: 1 }}
                    minRows={5}
                />

            </Grid>

            <ImageGallery />

        </Grid>
    )
}
