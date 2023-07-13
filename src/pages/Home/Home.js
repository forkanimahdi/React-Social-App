import { RightSideBar } from "../../layouts/RightSideComponent/RightSideBar"
import { LeftSidebar } from "../../layouts/leftSideComponent/LeftSideBar"
import "./Home.sass"
import { HomeBody } from "./components/HomeComponent"
export const Home = (props) => {



    return (
        <>
            <div className="homeContainer">
                <LeftSidebar />
                <HomeBody />

                <RightSideBar />
            </div>

        </>



    )
}