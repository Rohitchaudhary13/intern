import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'

const Bookings = (props) => {

  const [alignment, setAlignment] = React.useState(false);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange}
>
        <ToggleButton value="false" className='bookings' sx={{display: 'flex', flexDirection: 'column', marginRight: '20px'}}>
          <h4>{props.day}</h4>
          <h3>{props.date}</h3>
          <h4>{props.mon}</h4>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default Bookings