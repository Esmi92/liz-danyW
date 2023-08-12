import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import whatsIcon from '../../assets/whats.svg';

const mainColor = '#073D69';

export default function Rsvp() {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')

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
    return (
        <div className='rsvpSection'>
            <p className="SectionTitle">R.S.V.P.</p>
            <div className='rsvpCard CardComponent'>
                <TextField label="Nombre" fullWidth id="margin-none" onChange={(e) => { onChange(e, "name") }} value={name} />
                <TextField label="Apellido" fullWidth id="margin-none" onChange={(e) => { onChange(e, "lastName")}} value={lastName} />
                <Button variant="contained" fullWidth
                    onClick={onClick}
                    size="large"
                    style={{
                        backgroundColor: mainColor,
                        fontFamily: "Barlow"

                    }} endIcon={<img src={whatsIcon} className="whatsIcon" alt="logo" />}>
                    Confirmar
                </Button>
            </div>
        </div>
    )
}