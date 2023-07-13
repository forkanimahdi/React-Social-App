import { faBell, faChartSimple, faCompass, faFilm, faGear, faHouse, faPowerOff, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import './LeftSideBar.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export const LeftSidebar = () => {

    let [activeHome, setActiveHome] = useState(false)
    let [activeNotification, setActiveNotification] = useState(false)
    let [activeFollowers, setActiveFollowers] = useState(false)
    let [activeDiscover, setActiveDiscover] = useState(false)
    let [activeVideo, setActiveVideo] = useState(false)
    let [activeTrend, setActiveTrend] = useState(false)
    let [activeSetting, setActiveSetting] = useState(false)
    let [activeProfile, setActiveProfile] = useState(false)
    let [activeLogout, setActiveLogout] = useState(false)

    const activing = (activated, desactivated, desactivated2, desactivated3, desactivated4, desactivated5, desactivated6, desactivated7, desactivated8) => {
        activated(true)
        desactivated(false)
        desactivated2(false)
        desactivated3(false)
        desactivated4(false)
        desactivated5(false)
        desactivated6(false)
        desactivated7(false)
        desactivated8(false)

    }


    return (

        <>

                <div className="leftsidebar">
                    <div className="logo">
                        <h1>INAKROF</h1>
                    </div>
                    <div className="menuoption container ">
                        <div onClick={() => {
                            activing(setActiveHome, setActiveNotification, setActiveFollowers, setActiveDiscover, setActiveVideo, setActiveTrend, setActiveSetting, setActiveProfile, setActiveLogout)
                        }} className={activeHome === true ? "option activated-option rounded-pill" : "option rounded-pill"}>
                            <div className="HomeIcon">
                                <FontAwesomeIcon icon={faHouse} />
                            </div>
                            <h4 className="homeTittle">Home</h4>
                        </div>
                        <div onClick={() => {
                            activing(setActiveNotification, setActiveHome, setActiveFollowers, setActiveDiscover, setActiveVideo, setActiveTrend, setActiveSetting, setActiveProfile, setActiveLogout)
                        }} className={activeNotification === true ? "option activated-option rounded-pill" : "option rounded-pill"}>
                            <div className="HomeIcon">
                                <FontAwesomeIcon icon={faBell} />
                            </div>
                            <h4 className="homeTittle">Notification</h4>
                        </div>
                        <div onClick={() => {
                            activing(setActiveFollowers, setActiveNotification, setActiveHome, setActiveDiscover, setActiveVideo, setActiveTrend, setActiveSetting, setActiveProfile, setActiveLogout)

                        }} className={activeFollowers === true ? "option activated-option rounded-pill" : "option rounded-pill"}>
                            <div className="HomeIcon">
                                <FontAwesomeIcon icon={faUserGroup} />
                            </div>
                            <h4 className="homeTittle">Follow Requets</h4>
                        </div>
                        <div onClick={() => {
                            activing(setActiveDiscover, setActiveNotification, setActiveFollowers, setActiveHome, setActiveVideo, setActiveTrend, setActiveSetting, setActiveProfile, setActiveLogout)

                        }} className={activeDiscover === true ? "option activated-option rounded-pill" : "option rounded-pill"}>
                            <div className="HomeIcon">
                                <FontAwesomeIcon icon={faCompass} />
                            </div>
                            <h4 className="homeTittle">discover</h4>
                        </div>
                        <div onClick={() => {
                            activing(setActiveVideo, setActiveNotification, setActiveFollowers, setActiveDiscover, setActiveHome, setActiveTrend, setActiveSetting, setActiveProfile, setActiveLogout)

                        }} className={activeVideo === true ? "option activated-option rounded-pill" : "option rounded-pill"}>
                            <div className="HomeIcon">
                                <FontAwesomeIcon icon={faFilm} />
                            </div>
                            <h4 className="homeTittle">video</h4>
                        </div>
                        <div onClick={() => {
                            activing(setActiveTrend, setActiveNotification, setActiveFollowers, setActiveDiscover, setActiveVideo, setActiveHome, setActiveSetting, setActiveProfile, setActiveLogout)

                        }} className={activeTrend === true ? "option activated-option rounded-pill" : "option rounded-pill"}>
                            <div className="HomeIcon">
                                <FontAwesomeIcon icon={faChartSimple} />
                            </div>
                            <h4 className="homeTittle">trend</h4>
                        </div>
                    </div>
                    <div className="setting-pannel">
                        <div onClick={() => {
                            activing(setActiveSetting, setActiveNotification, setActiveFollowers, setActiveDiscover, setActiveVideo, setActiveTrend, setActiveHome, setActiveProfile, setActiveLogout)

                        }} className={activeSetting === true ? "option activated-option rounded-pill" : "option rounded-pill"}>
                            <div className="HomeIcon">
                                <FontAwesomeIcon icon={faGear} />
                            </div>
                            <h4 className="homeTittle">Setting</h4>
                        </div>
                        <div onClick={() => {
                            activing(setActiveProfile, setActiveNotification, setActiveFollowers, setActiveDiscover, setActiveVideo, setActiveTrend, setActiveSetting, setActiveHome, setActiveLogout)

                        }} className={activeProfile === true ? "option activated-option rounded-pill" : "option rounded-pill"}>
                            <div className="HomeIcon">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <h4 className="homeTittle">profile</h4>
                        </div>
                        <div onClick={() => {
                            activing(setActiveLogout, setActiveNotification, setActiveFollowers, setActiveDiscover, setActiveVideo, setActiveTrend, setActiveSetting, setActiveProfile, setActiveHome)

                        }} className={activeLogout === true ? "option activated-option rounded-pill" : "option rounded-pill"}>
                            <div className="HomeIcon">
                                <FontAwesomeIcon icon={faPowerOff} />
                            </div>
                            <h4 className="homeTittle">log out</h4>
                        </div>

                    </div>
                    <div className="copyright">
                        <div className="text-white">&copy; All right reserved to Forkani</div>
                    </div>

                </div>

        </>

    )
}
