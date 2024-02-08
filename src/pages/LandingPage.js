import { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { useNavigate } from "react-router-dom";

import logo from '../logov2.svg';
import Footer from './Footer';
import '../Page.css';

function LandingPage() {

    const [input, setInput] = useState("")
    const [isError, setIsError] = useState(false)
    const [viewPass, setViewPass] = useState(false)
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
                    <p>¡Acompañanos en nuestro <br /> gran día!</p>
                    <p>28 . 09 . 24</p>
                    <TextField
                        onChange={onChange}
                        onKeyDown={redirectEnter}
                        id="event-password"
                        type={viewPass ? "text" : "password"}
                        size="small"
                        error={isError}
                        helperText={isError ? "código incorrecto" : null}
                        value={input}
                        placeholder='Código del evento'
                        variant="outlined"
                        sx={{
                            opacity: 1.5,
                            borderRadius: "5px",
                            "& .MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                  borderColor: "#C59C5A"
                                }
                              }
                        }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                                <IconButton
                                    onClick={() => {
                                        if (viewPass) {
                                            setViewPass(false)
                                        } else {
                                            setViewPass(true)
                                        }
                                    }}
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "#D9E0E6",
                                            opacity: 0.75
                                        }
                                    }}>
                                    {viewPass
                                        ? <VisibilityOffIcon sx={{
                                            color: "#140152"
                                        }} />
                                        : <VisibilityIcon sx={{
                                            color: "#140152"
                                        }} />}
                                </IconButton>
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