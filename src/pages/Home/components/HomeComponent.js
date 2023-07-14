import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HomeComponent.sass';
import { faCalendarDays, faImage, faSquarePollHorizontal, faVideo } from '@fortawesome/free-solid-svg-icons';

export const HomeBody = (props) => {

    let date = new Date()
    let hours = date.getHours()
    let [dayPeriod, setDayPeriod] = useState('');
    let [activingButton, setActivingButton] = useState(false)




    useEffect(() => {
        let periodOfTheDay = hours < 12 ? 'mornning' : hours < 18 ? 'afternoon' : "evenning";
        setDayPeriod(periodOfTheDay);
    }, [hours])
    const ActivingPosting = (event) => {

        if (event !== "") {
            setActivingButton(true)
        } else {
            setActivingButton(false)
        }
    }



    return (
        <>

            <div className="homebody">
                <div className="home-welcoming-header">
                    <h4 className='text-white'>Good {dayPeriod} <span className=''>@{props.onlineUser.username}</span></h4>
                </div>
                <div className="container posting-area">
                    {/* <div className="posting-area-header"></div> */}
                    <textarea name="" id="" cols="30" rows="10" placeholder='Whats On your #Mind' onChange={(e) => {
                        ActivingPosting(e.target.value)
                    }}></textarea>
                    <div className="posting-pannel d-flex align-items-center justify-content-between">
                        <div className="posting-options d-flex align-items-center justify-content-around">
                            <div className="position-relative posting-parentdiv">
                                <input className='position-absolute w-100 opacity-0 end-0' type="file" accept="image/jpeg, image/png" />
                                <FontAwesomeIcon className='pannel-icons fs-4' icon={faImage} />
                            </div>
                            <div className="position-relative posting-parentdiv">
                                <input className='position-absolute w-100 opacity-0 end-0' type="file" accept="image/jpeg, image/png" />
                                <FontAwesomeIcon className='pannel-icons fs-4' icon={faVideo} />
                            </div>
                            <div className="position-relative posting-parentdiv">
                                <input className='position-absolute w-100 opacity-0 end-0' type="file" accept="image/jpeg, image/png" />
                                <FontAwesomeIcon className='pannel-icons fs-4' icon={faSquarePollHorizontal} />
                            </div>
                            <div className="position-relative posting-parentdiv">
                                <input className='position-absolute w-100 opacity-0 end-0' type="file" accept="image/jpeg, image/png" />
                                <FontAwesomeIcon className='pannel-icons fs-4' icon={faCalendarDays} />
                            </div>
                        </div>
                        <button className={activingButton === true ? 'posting-activated rounded-pill' : 'posting-desactivated rounded-pill'}>Post</button>
                    </div>
                </div>
                <div className="posts container mt-3 ">

                </div>



            </div>





        </>


    )



}