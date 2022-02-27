import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function Sidebar(props) {
  return (
    <Box component="span" sx={{
      p: 2,
      border: '1px solid grey',
      textAlign: 'center',
      marginTop: '1rem',
      borderRadius: '15px',
      backgroundColor: '#4d94ff'}}>
      <Button sx={{color: '#1a237e'}}>{props.name}</Button>
    </Box>
  );
}
