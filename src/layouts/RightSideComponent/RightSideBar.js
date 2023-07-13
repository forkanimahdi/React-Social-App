import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RightSideBar.sass';
import { faCheck, faCheckCircle, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { LeftSidebar } from '../leftSideComponent/LeftSideBar';
import MZ from "../../assets/MZ.jpg"
import EM from "../../assets/EM.jpg"
import Logo from "../../assets/logo.png"
import JB from "../../assets/JB.jpeg"
import JM from "../../assets/JM.jpg"
import TH from "../../assets/TH.jfif"
import SJ from "../../assets/SJ.jpg"


export const RightSideBar = () => {





    return (
        <>
                <div className="rightsidebar">

                    <div className="side-searching">
                        <div className="searching">
                            <button>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                            <input className='bg-transparent text-white' type="text" placeholder='Search ....' />
                        </div>
                    </div>

                    <div className="populair-creator">
                        <h5 className="ppch">Suggested creators</h5>
                        <div className="creator-div">
                            <div className="creator">
                                <img className='rounded-circle' src={EM} alt="" />
                                <div className="creator-info">
                                    <h6 className='text-white'>@musk <span className='verified-active ms-2'><FontAwesomeIcon icon={faCheckCircle} /></span></h6>
                                    <h6 className=''>Elon Musk</h6>
                                </div>
                            </div>
                            <div className="creator">
                                <img className='rounded-circle' src={MZ} alt="" />
                                <div className="creator-info">
                                    <h6 className='text-white'>@zuck <span className='verified-active ms-2'><FontAwesomeIcon icon={faCheckCircle} /></span></h6>
                                    <h6 className=''>Mark Zuckrburg</h6>
                                </div>
                            </div>
                            <div className="creator">
                                <img className='rounded-circle' src={JB} alt="" />
                                <div className="creator-info">
                                    <h6 className='text-white'>@random <span className='verified-desactive ms-2'><FontAwesomeIcon icon={faCheckCircle} /></span></h6>
                                    <h6 className=''>Random User</h6>
                                </div>
                            </div>
                            <div className="creator">
                                <img className='rounded-circle' src={Logo} alt="" />
                                <div className="creator-info">
                                    <h6 className='text-white'>@forkani <span className='verified-active ms-2'><FontAwesomeIcon icon={faCheckCircle} /></span></h6>
                                    <h6 className=''>Mehdi Forkani</h6>
                                </div>
                            </div>
                            <div className="creator">
                                <img className='rounded-circle' src={SJ} alt="" />
                                <div className="creator-info">
                                    <h6 className='text-white'>@stevejobs <span className='verified-desactive ms-2'><FontAwesomeIcon icon={faCheckCircle} /></span></h6>
                                    <h6 className=''>Steve Jobs</h6>
                                </div>
                            </div>
                            <div className="creator">
                                <img className='rounded-circle' src={JM} alt="" />
                                <div className="creator-info">
                                    <h6 className='text-white'>@jackma <span className='verified-active ms-2'><FontAwesomeIcon icon={faCheckCircle} /></span></h6>
                                    <h6 className=''>Jack Ma</h6>
                                </div>
                            </div>



                        </div>

                    </div>





                </div>

        </>


    )
}