import { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { useNavigate } from "react-router-dom";

import logo from '../logov2.svg';
import Footer from './Footer';
import '../Page.css';

function LandingPage() {

    const [input, setInput] = useState("")
    const [isError, setIsError] = useState(false)
    const navigate = useNavigate();

    const onChange = (e) => {
        setIsError(false)
        setInput(e.target.value)
    }

    const redirect = () => {
        setIsError(false)
        navigate("/home", { state: input })
    }

    const redirectEnter = (e) => {
        if (e.key === "Enter" && input === process.env.REACT_APP_PASSWORD) {
            redirect()
        } else if (e.key === "Enter") { setIsError(true) }
    }
    const redirectClick = () => {
        if (input === process.env.REACT_APP_PASSWORD) {
            redirect()
        } else { setIsError(true) }
    }
    return (
        <div className="LandingPage">
            <header className="welcome">
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    <p className="invitationText">¡Acompañanos en nuestro <br /> gran día!</p>
                    <p id="date">28 . 09 . 24</p>
                    <TextField
                        onChange={onChange}
                        onKeyDown={redirectEnter}
                        id="event-password"
                        type="password"
                        size="small"
                        error={isError}
                        helperText={isError ? "código incorrecto" : null}
                        value={input}
                        placeholder='Código del evento'
                        variant="filled"
                        sx={{
                            backgroundColor: "#bfd7ea",
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