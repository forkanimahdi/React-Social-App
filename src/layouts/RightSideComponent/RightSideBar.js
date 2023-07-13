import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RightSideBar.sass';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { LeftSidebar } from '../leftSideComponent/LeftSideBar';

export const RightSideBar = () => {





    return (
        <>
            <div className="containing">
                <LeftSidebar />
                <div className="home">

                </div>



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

                    </div>





                </div>

            </div>



        </>


    )
}