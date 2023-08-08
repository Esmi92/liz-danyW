import React, { useRef, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useLocation, useNavigate } from 'react-router-dom';

import DateCountdown from './components/DateCountdown';
import Venue from './components/Venue';
import desktopImage from '../assets/headerImage.jpg';
import celImage from '../assets/foto1.PNG';
import Logo from '../logo.svg';
import './components/Components.css';

function InvitationHome() {
  const location = useLocation();
  const navigate = useNavigate()
  const matches = useMediaQuery('(max-width:600px)');
  const ipad = useMediaQuery('(max-width:900px)');

  const DateRef = useRef(null);
  const VenueRef = useRef(null);
  const AccomodationRef = useRef(null);
  const GiftsRef = useRef(null);
  const DressCodeRef = useRef(null);
  const RSVPRef = useRef(null);

  const photo = matches ? celImage : desktopImage;
  const menuFont = ipad ? "2vh" : "3vh";

  useEffect(() => {
    if(!location.state ){
      navigate("/")
    }
  }, [])

  const handleChange = (e, newValue) => {
    switch (newValue) {
      case 0:
        DateRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case 1:
        VenueRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case 2:
        GiftsRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case 3:
        AccomodationRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case 4:
        DressCodeRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case 5:
        RSVPRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
    }
    console.log(newValue);
  };

  const StyledTab = styled((props) => (
    <Tab {...props} />
  ))(({ theme }) => ({
    textTransform: 'none',
    fontFamily: 'barlow',
    fontSize: menuFont,
    maxWidth: 'none',
    color: '#f9f7f3'
  }));

  return (
    <div ref={DateRef} className='invitation'>
      <div className='PhotoContainer'>
        <div className='photoComponent'>
          <img className='photo' src={photo} alt="Liz y Dany" />
          <div className='titleContainer'>
            <div className='title'>Lizzette & Daniel</div>
          </div>
        </div>
      </div>
      <div className='MainContentContainer'>
        <div className='frontInvitation'>
         <DateCountdown />
        </div>
        <div className='MenuDiv'>
          {matches ? 
          <Tabs
            centered
            fullWidth
            onChange={handleChange} value={false}>
            <Tab label={<img src={Logo} alt='logo' />} value={0} /> </Tabs> :
            <Tabs
              centered
              onChange={handleChange} value={false}>
              <Tab label={<img src={Logo} alt='logo' />} value={0} />
              <StyledTab label={"Evento"} value={1} />
              <Divider orientation="vertical" variant='middle' flexItem />
              <StyledTab label={"Protocolo"} value={4} />
              <Divider orientation="vertical" variant='middle' flexItem />
              <StyledTab label={"Hospedaje"} value={3} />
              <Divider orientation="vertical" variant='middle' flexItem />
              <StyledTab label={"Regalos"} value={2} />
              <Divider orientation="vertical" variant='middle' flexItem />
              <StyledTab label={"RSVP"} value={5} />
            </Tabs>}
        </div>
        <div className='frontInvitation'>
          <Divider style={{ marginBottom: 15 }} variant='middle' />
          <div ref={VenueRef} />
          <Venue />

          <Divider style={{ marginBottom: 15, marginTop: 15 }} variant='middle' />
          <div ref={DressCodeRef} />
          <h1>Dresscode</h1>

          <Divider style={{ marginBottom: 15, marginTop: 15 }} variant='middle' />
          <div ref={AccomodationRef} />
          <h1>Hospedaje</h1>

          <Divider style={{ marginBottom: 15, marginTop: 15 }} variant='middle' />
          <div ref={GiftsRef} />
          <h1>Regalos</h1>

          <Divider style={{ marginTop: 15 }} variant='middle' />
          <div ref={RSVPRef} />
          <h1>RSVP</h1>

          <Divider style={{ marginTop: 15 }} variant='middle' />
        </div>
      </div>
      
    </div>
  );
}


export default InvitationHome;
