import { LeftSidebar } from '../leftSideComponent/component2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './component5.sass';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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

                        
                    </div>





                </div>

            </div>



        </>


    )
}