import './HomeComponent.sass';

export const HomeBody = (props) => {


    return (
        <>

            <div className="homebody">
                <div className="home-welcoming-header">
                    <h4 className='text-white'>welcome <span className=''>@{props.onlineUser.username}</span></h4>
                </div>



            </div>





        </>


    )



}