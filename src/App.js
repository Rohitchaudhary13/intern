import { Box, Button, Container } from '@mui/material';
import './App.css';
import ResponsiveAppBar from './components/Appbar'
import UseAnimations from 'react-useanimations';
import arrowLeftCircle from 'react-useanimations/lib/arrowLeftCircle';
import Sidebar from './components/Sidebar';
import Bookings from './components/Bookings';
import { useState } from 'react';
import Slot from './components/Slot';
import {useEffect} from "react";

let globalID = 1;

function App() {
  useEffect(() => {
    fetchData();
    }, []);
  const [data, setData] = useState([]);
  const fetchData = async() => {
    const res = await fetch('https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json')
    const mine = await res.json()
    setData(oldData => {
      return [...oldData, {data: mine, id: globalID}]
    });
    console.log(data)
  }

  return (
    <div>
      {/* Navbar */}
      <ResponsiveAppBar className="navbar"/>

      <Container sx={{display: 'flex', marginLeft: '-25px'}}>
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '20rem',
          height: '40rem'
          }}
          className="sidebar">

            <Sidebar name = "Home"/>
            <Sidebar name = "Profile"/>
            <Sidebar name = "Journey"/>
            <Sidebar name = "Map"/>
            <Sidebar name = "Route"/>
            <Sidebar name = "FAQs"/>

        </Container>

        <Container sx={{marginTop: '10px'}} >
          {/* Main Content */}
          <UseAnimations animation={arrowLeftCircle} size={40} sx={{cursor: 'pointer'}}/>
          <h1>Book Demo Session Slot!</h1>
          <h2>Select Date</h2>
          <Container sx={{display: "flex", flexDirection: 'row'}} className="book">

            <Bookings day="Mon" date="22" mon="Feb" />
            <Bookings day="Tue" date="23" mon="Feb" />
            <Bookings day="Wed" date="24" mon="Feb" />
            <Bookings day="Thu" date="25" mon="Feb" />
            <Bookings day="Fri" date="26" mon="Feb" />
            <Bookings day="Sat" date="27" mon="Feb" />

          </Container>
          <h2>Select Slot</h2>
          <Box sx={{display: 'flex', flexDirection: 'row'}}>

            <Slot time="6PM - 7PM"/>
            <Slot time="7PM - 8PM"/>

          </Box>
          <Container>
            <Button variant="contained"
            sx={{backgroundColor: '#1a237e', marginTop: '1rem'}}>
                Proceed To Pay
            </Button>
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default App;