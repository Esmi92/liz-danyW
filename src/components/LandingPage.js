import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import logo from '../logo.svg';
import Footer from './Footer';

function LandingPage() {
    //console.log(process.env.REACT_APP_PASSWORD)
    const redirectEnter = (ev) => {
        console.log('Click', ev)
    }
    const redirectClick = (ev) => {
        console.log('Click', ev)
    }
    return (
        <div className="LandingPage">
            <header className="welcome">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="invitation">
                    <p className="invitationText">Estas cordialmente <br /> invitado</p>
                    <p id="date">28 . 09 . 24</p>
                    <TextField
                        onKeyDown={redirectEnter}
                        id="event-password"
                        type="password"
                        size="small"
                        placeholder='Codigo del evento'
                        variant="filled"
                        sx={{
                            backgroundColor: "#AFBECF",
                            opacity: 1.5,
                            borderRadius: "5px",
                            input: {
                                color: '#140152'
                            }
                        }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <IconButton
                                onClick={redirectClick}
                                 sx={{
                                    "&:hover": {
                                        backgroundColor: "#D9E0E6",
                                        opacity: 0.75
                                    }
                                }}>
                                    <ArrowForwardIcon sx={{
                                        color: "#140152"
                                    }} />
                                </IconButton>
                            </InputAdornment>,
                        }}
                    />
                </div>
            </header>
            <Footer />
        </div>
    );
}

export default LandingPage;