import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HomeComponent.sass';
import { faCalendarDays, faCheckCircle, faClipboard, faComment, faEye, faHeart, faImage, faRetweet, faSquarePollHorizontal, faVideo } from '@fortawesome/free-solid-svg-icons';
import MZ from "../../../assets/MZ.jpg"
// import EM from "../../../assets/EM.jpg"
import Logo from "../../../assets/logo.png"
import TEAM from "../../../assets/TEAM.jfif"
// import JM from "../../../assets/JM.jpg"
import SJ from "../../../assets/SJ.jpg"

export const HomeBody = (props) => {

    let date = new Date()
    let hours = date.getHours()
    let minuts = date.getMinutes()
    hours = hours < 10 ? "0" + hours : hours
    minuts = minuts < 10 ? "0" + minuts : minuts
    let [dayPeriod, setDayPeriod] = useState('');
    let [activingButton, setActivingButton] = useState(false)
    let [posteArray, setPOstArray] = useState([])
    let [PostText, setPostText] = useState("")
    let [selectedImage, setSelectedImage] = useState(null);
    let [selectedVideo, setSelectedVideo] = useState(null);
    let [activingImageHeader, setActivingImageHeader] = useState(false)
    let file;

    useEffect(() => {
        let periodOfTheDay = hours < 12 ? 'mornning' : hours < 18 ? 'afternoon' : "evenning";
        setDayPeriod(periodOfTheDay);
    }, [hours])
    const ActivingPosting = (event) => {

        if (event !== "") {
            setActivingButton(true)
            setPostText(event)

        } else {
            setActivingButton(false)
            setPostText(event)

        }
    }
    // * checking if the area is filled before posting
    const Posting = (e) => {
        let postingBTN = e.target
        if (postingBTN.classList.contains("posting-activated")) {
            Post(postingBTN)
        }
    }
    // ! still under progress
    const BackToLine = (event) => {
        if (event.key === 'Enter') {
            setPostText((prevText) => prevText + '\n');
        }
    }
    // * post in the posts Array
    const Post = (e) => {
        let textArea = e.parentElement.previousElementSibling
        PostText =textArea.value
        PostText = PostText.charAt(0).toUpperCase() + PostText.slice(1)
        let thePost = {
            postContent: PostText,
            postImage: selectedImage,
            postVideo: selectedVideo
        }
        let copyOfPostArray = [...posteArray]
        copyOfPostArray.splice(0, 0, thePost)
        textArea.style.height = "50%"
        setPostText("")
        setPOstArray(copyOfPostArray)
        setActivingButton(false)
        setSelectedImage(null)
        setSelectedVideo(null)
        setActivingImageHeader(false)


    }

    const uploadImage = (e) => {
        let textareaInput = e.target.parentElement.parentElement.parentElement.previousElementSibling
        textareaInput.style.height = "30%"
        setActivingImageHeader(true)
        file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = () => {
            setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
    }
    const uploadVideo = (e) => {
        let textareaInput = e.target.parentElement.parentElement.parentElement.previousElementSibling
        textareaInput.style.height = "30%"
        setActivingImageHeader(true)
        file = e.target.files[0];
        console.log(file);
        let reader = new FileReader();
        reader.onload = () => {
            setSelectedVideo(reader.result);
        };
        reader.readAsDataURL(file);
    }








    return (
        <>

            <div className="homebody">
                <div className="home-welcoming-header">
                    <h4 className='text-white'>Good {dayPeriod} <span className=''>@{props.onlineUser.username}</span></h4>
                </div>
                {/* posting hrader area  */}
                <div className="container posting-area">
                    <div className={activingImageHeader === true ? 'posting-area-header' : 'd-none'}>
                        <img src={selectedImage} alt="" />
                        <video src={selectedVideo}></video>
                    </div>
                    <textarea name="" id="" cols="30" rows="10" value={PostText} placeholder='Whats On your #Mind' onChange={(e) => {
                        ActivingPosting(e.target.value)
                    }} onKeyDown={(BackToLine)}></textarea>
                    <div className="posting-pannel d-flex align-items-center justify-content-between">
                        <div className="posting-options d-flex align-items-center justify-content-around">
                            <div className="position-relative posting-parentdiv pointer-event">
                                <input className=' pointer-event position-absolute w-100 opacity-0 end-0' type="file" accept="image/jpeg, image/png" onChange={uploadImage} />
                                <FontAwesomeIcon className='pannel-icons fs-4' icon={faImage} />
                            </div>
                            <div className="position-relative posting-parentdiv">
                                <input className='position-absolute w-100 opacity-0 end-0' type="file" accept="video/mp4, video/webm, video/ogg" onChange={uploadVideo} />
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
                        <button onClick={(e) => { Posting(e) }} className={activingButton === true ? 'posting-activated rounded-pill' : 'posting-desactivated rounded-pill'}>Post</button>
                    </div>
                </div>
                <div className="posts mt-3 ">
                    {/* User posts */}
                    {
                        posteArray.map((element, index) =>
                            <>

                                {/* *post   */}
                                <div key={index} className="post mt-4 container d-flex align-items-center justify-content-around flex-column">
                                    <div className="post-header p-2 d-flex align-items-center justify-content-between">
                                        <img className='rounded-circle' src={Logo} alt="" />
                                        <div className="post-user d-flex align-items-center  ms-3">
                                            <h6 className=''>{props.onlineUser.username}</h6>
                                            <FontAwesomeIcon className='not-verified mb-1 ms-2' icon={faCheckCircle} />
                                        </div>
                                        <div className="posted-time">
                                            Casablanca - {hours} : {minuts}
                                        </div>
                                    </div>
                                    <div className="post-content p-2 text-white ">
                                        {element.postContent}
                                        <img src={element.postImage} alt="" />
                                        {/* <video src={element.postVideo} autoPlay></video> */}
                                    </div>
                                    <div className="post-panel p-3 d-flex align-items-center justify-content-around fs-6">
                                        <div className="d-flex align-items-center justify-content-around mini-post-pannel like-pannel">
                                            <FontAwesomeIcon icon={faHeart} />
                                            <div className="like-number ms-1"></div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-around mini-post-pannel comment-pannel">
                                            <FontAwesomeIcon icon={faComment} />
                                            <div className="comment-number ms-1"></div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-around mini-post-pannel repost-pannel">
                                            <FontAwesomeIcon icon={faRetweet} />
                                            <div className="repost-number ms-1"></div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-around mini-post-pannel views-pannel">
                                            <FontAwesomeIcon icon={faEye} />
                                            <div className="view-number ms-1">0</div>

                                        </div>
                                        <div className="d-flex align-items-center justify-content-around mini-post-pannel copy-pannel">
                                            <FontAwesomeIcon icon={faClipboard} />
                                            <div className="copy-text ms-1">copy</div>
                                        </div>
                                    </div>
                                </div>



                            </>

                        )
                    }
                    {/* *post default  */}
                    <div className="post mt-4 container d-flex align-items-center justify-content-around flex-column">
                        <div className="post-header p-2 d-flex align-items-center justify-content-between">
                            <img className='rounded-circle' src={Logo} alt="" />
                            <div className="post-user d-flex align-items-center  ms-3">
                                <h6 className=''>@Forkani</h6>
                                <FontAwesomeIcon className='verified mb-1 ms-2' icon={faCheckCircle} />
                            </div>
                            <div className="posted-time">
                                Casablanca - July 15
                            </div>
                        </div>
                        <div className="post-content p-2 text-white ">
                            Hello world welcome to similair Social media website #INAKROF i will let you figur out  all what you can do here #3NJ0Y <br />
                            #Made-With-React <br />
                            #Made-By-Forkani-Mehdi
                        </div>
                        <div className="post-panel p-3 d-flex align-items-center justify-content-around fs-6">
                            <div className="d-flex align-items-center justify-content-around mini-post-pannel like-pannel">
                                <FontAwesomeIcon icon={faHeart} />
                                <div className="like-number ms-1">30k</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-around mini-post-pannel comment-pannel">
                                <FontAwesomeIcon icon={faComment} />
                                <div className="comment-number ms-1">5986</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-around mini-post-pannel repost-pannel">
                                <FontAwesomeIcon icon={faRetweet} />
                                <div className="repost-number ms-1">10k</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-around mini-post-pannel views-pannel">
                                <FontAwesomeIcon icon={faEye} />
                                <div className="view-number ms-1">15M</div>

                            </div>
                            <div className="d-flex align-items-center justify-content-around mini-post-pannel copy-pannel">
                                <FontAwesomeIcon icon={faClipboard} />
                                <div className="copy-text ms-1">copy</div>
                            </div>
                        </div>
                    </div>
                    {/* post with photo */}
                    <div className="post mt-4 container d-flex align-items-center justify-content-around flex-column">
                        <div className="post-header p-2 d-flex align-items-center">
                            <img className='rounded-circle' src={MZ} alt="" />
                            <div className="post-user d-flex align-items-center ms-3">
                                <h6 className=''>@NotZuck</h6>
                            </div>
                            <div className="posted-time">
                                NewYork - July 15
                            </div>
                        </div>
                        <div className="post-content p-2 text-white">
                            This is the best people you will ever work with in your life
                            <img src={TEAM} alt="" />
                        </div>
                        <div className="post-panel p-3 d-flex align-items-center justify-content-around fs-6">
                            <div className="d-flex align-items-center justify-content-around mini-post-pannel like-pannel">
                                <FontAwesomeIcon icon={faHeart} />
                                <div className="like-number ms-1">10k</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-around mini-post-pannel comment-pannel">
                                <FontAwesomeIcon icon={faComment} />
                                <div className="comment-number ms-1">2024</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-around mini-post-pannel repost-pannel">
                                <FontAwesomeIcon icon={faRetweet} />
                                <div className="repost-number ms-1">5054</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-around mini-post-pannel views-pannel">
                                <FontAwesomeIcon icon={faEye} />
                                <div className="view-number ms-1">150k</div>

                            </div>
                            <div className="d-flex align-items-center justify-content-around mini-post-pannel copy-pannel">
                                <FontAwesomeIcon icon={faClipboard} />
                                <div className="copy-text ms-1">copy</div>
                            </div>
                        </div>
                    </div>
                    {/* user review default */}
                    <div className="post mt-4 container d-flex align-items-center justify-content-around flex-column">
                        <div className="post-header p-2 d-flex align-items-center">
                            <img className='rounded-circle' src={SJ} alt="" />
                            <div className="post-user d-flex align-items-center ms-3">
                                <h6 className=''>@Matthew</h6>
                            </div>
                            <div className="posted-time">
                                Tokyo - July 12
                            </div>
                        </div>
                        <div className="post-content p-2 text-white">

                            Exciting News! I'm thrilled to announce that I've joined IKRANOF, a fantastic social media platform made with React. Looking forward to engaging with a vibrant community passionate about knowledge sharing. Join me on this exciting journey!
                            <br /> #IKRANOF
                            <br /> #React
                            <br /> #LearningCommunity
                        </div>
                        <div className="post-panel p-3 d-flex align-items-center justify-content-around fs-6">
                            <div className="d-flex align-items-center justify-content-around mini-post-pannel like-pannel">
                                <FontAwesomeIcon icon={faHeart} />
                                <div className="like-number ms-1">10k</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-around mini-post-pannel comment-pannel">
                                <FontAwesomeIcon icon={faComment} />
                                <div className="comment-number ms-1">2024</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-around mini-post-pannel repost-pannel">
                                <FontAwesomeIcon icon={faRetweet} />
                                <div className="repost-number ms-1">5054</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-around mini-post-pannel views-pannel">
                                <FontAwesomeIcon icon={faEye} />
                                <div className="view-number ms-1">150k</div>

                            </div>
                            <div className="d-flex align-items-center justify-content-around mini-post-pannel copy-pannel">
                                <FontAwesomeIcon icon={faClipboard} />
                                <div className="copy-text ms-1">copy</div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>





        </>


    )



}