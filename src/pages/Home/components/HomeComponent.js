import { useEffect, useState } from 'react';
import './HomeComponent.sass';

export const HomeBody = (props) => {

    let date = new Date()
    let hours = date.getHours()
    let [dayPeriod, setDayPeriod] = useState('');
    useEffect(() => {
            dayPeriod = hours < 12 ? 'mornning' : hours < 18 ? 'afternoon' : "evenning",
            setDayPeriod(dayPeriod);
        }, [hours])

    return (
        <>

            <div className="homebody">
                <div className="home-welcoming-header">
                    <h4 className='text-white'>welcome <span className=''>@{props.onlineUser.username}</span></h4>
                </div>
                <h4>Good {dayPeriod}</h4>
                <div className="container posting-area">

                </div>



            </div>





        </>


    )



}