import { RightSideBar } from "../../layouts/RightSideComponent/RightSideBar"
import { LeftSidebar } from "../../layouts/leftSideComponent/LeftSideBar"
import "./Home.sass"
import { HomeBody } from "./components/HomeComponent"
export const Home = (props) => {

    let onlineUser = props.onlineUser
    let setOnlineUser = props.setOnlineUser

    return (
        <>
            <div className="homeContainer">
                <LeftSidebar />
                <HomeBody onlineUser={onlineUser} setOnlineUser={setOnlineUser} />
                <RightSideBar />
            </div>

        </>



    )
}