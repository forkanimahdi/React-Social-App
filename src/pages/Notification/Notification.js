import { RightSideBar } from "../../layouts/RightSideComponent/RightSideBar"
import { LeftSidebar } from "../../layouts/leftSideComponent/LeftSideBar"
import { NotificationComponent } from "./components/NotifComponent"
import "./Notification.sass"
export const Notification = (props) => {

    let onlineUser = props.onlineUser
    let setOnlineUser = props.setOnlineUser

    return (
        <>
            <div className="notificationContainer">
                <LeftSidebar />
                <NotificationComponent onlineUser={onlineUser} setOnlineUser={setOnlineUser} />
                <RightSideBar />
            </div>

        </>
    )
}