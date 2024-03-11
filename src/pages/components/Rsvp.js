import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import whatsIcon from '../../assets/whats.svg';
import branch from '../../assets/branch.svg';

const mainColor = '#bb72a2';
const secondColor = '#E7D2E0';
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
        const message = `Hola,${space}soy${space}${name}${space}${lastName}${space}quiero${space}confirmar${space}mi${space}asistencia${space}a${space}la${space}boda${space}de${space}Lizzete${space}y${space}Daniel,${space}para${space}la${space}fecha${space}del${space}28/sept/2024.${space}Muchas${space}gracias`;
        const url = `https://wa.me/527771985078?text=${message}`;
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
           { !matches && <p className='rsvpNames'>Lizzete</p> }
            <div className='rsvpSection'>
                <div className='dynamicTitle'>
                    {matches && <img src={branch} className="dynamicImage" alt="logo" />}
                    <p className="SectionTitle"><b>Confirma tu asistencia</b></p>
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
           { !matches && <p className='rsvpNames'>Daniel</p>}
        </div>
    )
}