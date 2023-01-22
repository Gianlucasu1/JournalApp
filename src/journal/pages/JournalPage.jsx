import { JournalLayout } from '../layout/JournalLayout'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { NoteView, NothingSelectedView } from '../views'
import { positions } from '@mui/system'
import { AddOutlined, Note } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal'

export const JournalPage = () => {

  const { isSaving, active: activeNote } = useSelector((state) => state.journal);

  const dispatch = useDispatch();

  const onClickNewNote= () => {
    dispatch(startNewNote());
  }

  console.log(activeNote);

  

  return (
    <>
    <JournalLayout className='animate__animated animate__fadeIn animate__faster'>
      {activeNote == null ? <NothingSelectedView/> : <NoteView/> }
      
      <IconButton
        onClick={onClickNewNote}
        disabled={!!isSaving}
        size='large'
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ":hover" : { backgrounColor:'white', opacity: 0.9},
          position: 'fixed',
          right:50,
          bottom:50
        }}
      >
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
    </JournalLayout>
    </>
  )
}
