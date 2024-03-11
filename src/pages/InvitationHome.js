import React, { useRef, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useLocation, useNavigate } from 'react-router-dom';

import DateCountdown from './components/DateCountdown';
import Venue from './components/Venue';
import Protocol from './components/Protocol';
import Hotels from './components/Hotels';
import Footer from './Footer';
import Gifts from './components/Gifts';
import Quote from './components/Quote';
import Rsvp from './components/Rsvp';

import { TopLogoInvitation, SmallLogo } from './components/MainLogo';

import celImage from '../assets/mainMobile.jpg';
import desktopImage from '../assets/headerImage.jpg'
import './components/Components.css';

function InvitationHome() {
  const location = useLocation();
  const navigate = useNavigate();
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
    if (!location.state) {
      navigate("/")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      default:
    }
    console.log(newValue);
  };

  const StyledTab = styled((props) => (
    <Tab {...props} />
  ))(({ theme }) => ({
    textTransform: 'none',
    fontFamily: 'Cormorant Garamond',
    fontSize: menuFont,
    maxWidth: 'none',
    color: '#f9f7f3',
    '&:hover': {
      opacity: "0.6"
    }
  }));

  return (
    <div ref={DateRef} className='invitation'>
      <div className='PhotoContainer'>
        <div className='photoComponent'>
          <img className='photo' src={photo} alt="Liz y Dany" />
          <div className='titleContainer'>
            <div className='title'>
              <TopLogoInvitation />
            </div>
          </div>
        </div>
      </div>
      <div className='MainContentContainer'>
        <div className='frontInvitation'>
          <DateCountdown />
        </div>
        <div className='MenuDiv'>
          {matches ?
             <SmallLogo/>
            :
            <Tabs
              centered
              onChange={handleChange} value={false}>
              <StyledTab label={"Evento"} value={1} />
              <Divider orientation="vertical" variant='middle' flexItem />
              <StyledTab label={"Hospedaje"} value={3} />
              <Divider orientation="vertical" variant='middle' flexItem />
              <StyledTab label={"Protocolo"} value={4} />
              <Divider orientation="vertical" variant='middle' flexItem />
              <StyledTab label={"Regalos"} value={2} />
              <Divider orientation="vertical" variant='middle' flexItem />
              <StyledTab label={"RSVP"} value={5} />
            </Tabs>}
        </div>
        <div className='frontInvitation'>
          <Divider style={{ marginBottom: 15 }} variant='middle' />
          <Quote />
          <Divider style={{ marginBottom: 15, marginTop: 15 }} variant='middle' />
          <div ref={VenueRef} />
          <Venue matches={matches} />

          <Divider style={{ marginBottom: 15, marginTop: 15 }} variant='middle' />
          <div ref={AccomodationRef} />
          <Hotels matches={matches} />

          <Divider style={{ marginBottom: 15, marginTop: 15 }} variant='middle' />
          <div ref={DressCodeRef} />
          <Protocol matches={matches} />

          <Divider style={{ marginBottom: 15, marginTop: 15 }} variant='middle' />
          <div ref={GiftsRef} />
          <Gifts matches={matches} />

          <Divider style={{ marginTop: 15 }} variant='middle' />
          <div ref={RSVPRef} />
          <Rsvp matches={matches} />

          <Divider style={{ marginTop: 15 }} variant='middle' />
          <Footer />
        </div>

      </div>
    </div>
  );
}


export default InvitationHome;
