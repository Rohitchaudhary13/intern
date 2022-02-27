import { Container, ToggleButton } from '@mui/material';
import React, { useState } from 'react';


import '../App.css';
const Slot = (props) => {
  const [selected, setSelected] = useState(false);
    return (
    <div>
          <Container sx={{display: 'flex', flexDirection: 'row'}} className="Slot">
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
            sx={{marginRight: '1rem'}}
          >
                {props.time}
            </ToggleButton>
          </Container>
    </div>
  )
}

export default Slot