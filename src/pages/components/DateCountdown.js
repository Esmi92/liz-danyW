import { useState, useEffect } from "react";
import { MainDate } from "./Date";

export default function DateCountdown(props) {

    let now = new Date();
    let weddingDate = new Date('September 28, 2024 00:00:00');

    let timeRemaining = Math.floor((weddingDate.getTime() - now.getTime()) / 1000);
    let remaingMins = Math.floor(timeRemaining / 60);
    let remainingHours = Math.floor(remaingMins / 60);

    const { startingSeconds = timeRemaining } = props;
    const [secs, setSeconds] = useState(startingSeconds % 60);
    const [mins, setMinutes] = useState(remaingMins % 60);
    const [hours, setHours] = useState(remainingHours % 24);
    const [days, setDays] = useState(Math.floor(remainingHours / 24));

    useEffect(() => {
        let timeRemaining = startingSeconds;
        let sampleInterval = setInterval(() => {

            timeRemaining -= 1;
            setSeconds(timeRemaining % 60);

            let remaingMins = Math.floor(timeRemaining / 60);
            setMinutes((remaingMins % 60));

            let remainingHours = Math.floor(remaingMins / 60);
            setHours(remainingHours % 24);

            setDays(Math.floor(remainingHours / 24));

        }, 1000);
        return () => {
            clearInterval(sampleInterval);
        };
    }, [startingSeconds]);

    return (
        <div className='dateHourContainer'>
            <MainDate />
            <div className='detailsDate'>
                03:00pm
            </div>
            {
                weddingDate < now ?
                    <div className='detailsDate'>
                        {days === -1 ? "Hoy es el primer día de nuestra nueva aventura" : "GRACIAS POR ACOMPAÑARNOS"}
                    </div>
                    :
                    <div className="countdownTimer">
                        <div className="values">
                            <div className="numbers">{days < 10 ? `0${days}` : days}</div>
                            Días
                        </div>
                        <div className="values">
                            <div className="numbers">{hours < 10 ? `0${hours}` : hours}</div>
                            Horas
                        </div>
                        <div className="values">
                            <div className="numbers">{mins < 10 ? `0${mins}` : mins}</div>
                            Mins.
                        </div>
                        <div className="values">
                            <div className="numbers">{secs < 10 ? `0${secs}` : secs}</div>
                            Seg.
                        </div>
                    </div>
            }
        </div>
    );
}