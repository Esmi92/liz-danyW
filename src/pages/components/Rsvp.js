import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import whatsIcon from '../../assets/whats.svg';
import branch from '../../assets/branch.svg';

const mainColor = '#0b2c55';
const secondColor = '#c7d6e2';
var regex = /^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/;

export default function Rsvp({ matches }) {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [disabled, setDisabled] = useState(true)

    const onChange = (e, type) => {
        if (type === "name") {
            setName(e.target.value)
        } else {
            setLastName(e.target.value)
        }
    }

    const onClick = () => {
        const space = "%20";
        const message = `Hola,${space}soy${space}${name}${space}${lastName}${space}quiero${space}confirmar${space}mi${space}asistencia${space}a${space}la${space}boda${space}de${space}Lizzete${space}y${space}Daniel,${space}para${space}la${space}fecha${space}del${space}28/09/2024.${space}Muchas${space}gracias`;
        const url = `https://wa.me/525548573495?text=${message}`;
        window.open(url, "_blank");
        setName('');
        setLastName('');
    }

    useEffect(() => {
        const ifRegex = regex.test(name) && regex.test(lastName)
        console.log('Reg', ifRegex)
        if (name !== '' && lastName !== '' && ifRegex) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }

    }, [name, lastName])
    return (
        <div className='rsvp'>
            {/*!matches && <img src={liz} className="rsvpLogo2" alt="logo" />*/}
            <div className='rsvpSection'>
                <div className='dynamicTitle'>
                {matches && <img src={branch} className="dynamicImage" alt="logo" />}
                    <p className="SectionTitle"><b>R.S.V.P.</b></p>
                    {matches && <img src={branch} className="dynamicImage dynamicImageRotate" alt="logo" />}
                </div>
                <div className='rsvpCard CardComponent'>
                    <TextField label="Nombre" fullWidth id="margin-none" onChange={(e) => { onChange(e, "name") }} value={name} />
                    <TextField label="Apellido" fullWidth id="margin-none" onChange={(e) => { onChange(e, "lastName") }} value={lastName} />
                    <Button variant="contained" fullWidth
                        disabled={disabled}
                        onClick={onClick}
                        size="large"
                        style={{
                            backgroundColor: disabled ? secondColor : mainColor,
                            fontFamily: "Cormorant Garamond"

                        }} endIcon={<img src={whatsIcon} className="whatsIcon" alt="logo" />}>
                        {disabled ? "completa información" : "Confirmar"}
                    </Button>
                </div>
            </div>
            {/*!matches && <img src={dany} className="rsvpLogo" alt="logo" />*/}
        </div>
    )
}