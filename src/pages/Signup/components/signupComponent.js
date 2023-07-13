import './signupComponent.sass'
import myImage from '../../../assets/connected people.png';
import myLogo from '../../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const SignupComponent = (props) => {
    let [login, setLogin] = useState(false)
    let [singup, setSignup] = useState(true)
    let [singupUsername, setSingupUsername] = useState('')
    let [singupEmail, setSingupEmail] = useState('')
    let [singupPassword, setSingupPassword] = useState('')
    let [signupConfirm, setConfirmPassword] = useState('')
    let [error, setError] = useState("")
    let [users, setUsers] = useState([])
    let [loginEmail, setLoginEmail] = useState('')
    let [loginPassword, setLoginPassword] = useState('')
    const navigate = useNavigate()



    const SingupLogin = (active, desactive) => {
        active(true)
        desactive(false)
    }
    class Users {
        constructor(username, email, password) {
            this.username = username
            this.email = email
            this.password = password
        }
    }
    let testUser = new Users('admin', 'admin', 'admin')
    users.push(testUser)

    const Registring = () => {
        if (singupUsername !== '' && singupEmail !== "" && singupPassword !== "" && singupPassword === signupConfirm) {
            if (singupEmail.includes("@")) {
                if (singupPassword.length >= 8) {
                    let user = new Users(singupUsername, singupEmail, singupPassword)
                    setUsers([...users, user])
                    setError("Account created successfuly")
                    setSingupUsername("")
                    setSingupEmail('')
                    setSingupPassword("")
                    setConfirmPassword("")
                    setTimeout(() => {
                        setSignup(false)
                        setLogin(true)
                        setError("")
                    }, 3000);

                } else {
                    setError("Password must include 8 character ")
                    setTimeout(() => {
                        setError("")
                    }, 2000);
                }

            } else {
                setError("Invalid Email")
                setTimeout(() => {
                    setError("")
                }, 2000);
            }


        } else {
            setError("How TF you want to create Account With no Information")
            setTimeout(() => {
                setError("")
            }, 3000);
        }


    }
    const logingin = () => {
        for (let index = 0; index < users.length; index++) {
            const element = users[index];
            if (loginEmail === element.email) {
                if (loginPassword === element.password) {
                    let newUseronline = {
                        username: element.username,
                        userEmail: element.email,
                        userPassword: element.password
                    }
                    props.setOnlineUser(newUseronline)

                    navigate('./Home')
                } else {
                    setError("Password Incorrect ")
                    setTimeout(() => {
                        setError("")
                    }, 2000);
                }
            } else {
                setError("Email Incorrect ")
                setTimeout(() => {
                    setError("")
                }, 2000);
            }

        }
    }

    return (

        <>

            <div className="style position-fixed rounded-circle"></div>
            <div className="singup d-flex align-items-center justify-content-around">
                <div className="leftside flex-column d-flex align-items-center justify-content-around">
                    <h1 className='text-white'>INAKROF , Connect your Ideas</h1>
                    <img className='hero' src={myImage} alt="My texto" />
                    <h4 className="text-white">Share your Thought with people sharing the same ideas , Connect with the world bla bla bla</h4>
                    <div className="btns d-flex align-items-center justify-content-evenly">
                        <button onClick={() => {
                            SingupLogin(setSignup, setLogin)
                        }} className="btn text-white rounded-pill">Signup</button>
                        <button onClick={() => {
                            SingupLogin(setLogin, setSignup)
                        }} className="btn bg-white rounded-pill border border-3 border-dark">Login</button>
                    </div>
                    <div className="credit ">
                        <div className="footer">
                            <h6 className="text-white">Powered by</h6>
                            <img className='hero' src={myLogo} alt="My texto" />
                            <h6 className="text-white text-decoration-none">Forkani Mehdi</h6>
                        </div>
                    </div>
                </div>

                <div className='formulaire position-relative'>
                    <div className={login === false ? "d-none loginDiv" : "loginDiv flex-column d-flex  justify-content-evenly"}>
                        <h2 className="text-white text-center">Login</h2>
                        <label htmlFor="Emai">Email</label>
                        <input
                            onChange={(event) => {
                                setLoginEmail(event.target.value)
                            }} value={loginEmail} placeholder='Enter your Email' type="email" />
                        <label htmlFor="password">password</label>
                        <input
                            onChange={(event) => {
                                setLoginPassword(event.target.value)
                            }} value={loginPassword} placeholder='Enter your password' type="password" />
                        <p className='text-white text-center mt-2'>You dont have an have an account ? <span onClick={() => {
                            SingupLogin(setSignup, setLogin)
                        }} className='login-span'>Signup</span></p>
                        <input onClick={logingin} className='submit ' type="button" value="Login" />
                    </div>
                    <div className={singup === false ? "signupDiv d-none d-flex flex-column justify-content-around" : "signupDiv d-flex flex-column justify-content-around"}>
                        <h2 className="text-center text-white">SignUp</h2>
                        <label htmlFor="Username">Username</label>
                        <input value={singupUsername} onChange={(event) => {
                            setSingupUsername(event.target.value)
                        }} type="text" placeholder='Enter Your Username' />
                        <label htmlFor="Name">Email</label>
                        <input value={singupEmail} onChange={(event) => {
                            setSingupEmail(event.target.value)
                        }} type="email" placeholder='Enter Your Email' />
                        <label htmlFor="Password">Password</label>
                        <input value={singupPassword} onChange={(event) => {
                            setSingupPassword(event.target.value)
                        }} type="password" placeholder='Enter Password' name="" id="" className={signupConfirm === singupPassword && signupConfirm !== "" ? 'border border-5 border-success' : signupConfirm !== singupPassword && signupConfirm !== "" ? 'border border-5 border-danger' : ""} />
                        <label htmlFor="Confirm">Confirm Password</label>
                        <input value={signupConfirm} onChange={(event) => {
                            setConfirmPassword(event.target.value)
                        }} type="password" placeholder='Confirm Password' className={signupConfirm === singupPassword && signupConfirm !== "" ? 'border border-5 border-success' : signupConfirm !== singupPassword && signupConfirm !== "" ? 'border border-5 border-danger' : ""} />
                        <p className='text-white text-center mt-2'>Already have an account ? <span onClick={() => {
                            SingupLogin(setLogin, setSignup)
                        }} className='login-span'>Login</span></p>
                        <input onClick={Registring} className='submit ' type="button" value="Signup" />
                    </div>
                    <h4 className={error === "Account created successfuly" ? "text-success text-center bottom-0 mt-3" : "text-danger text-center bottom-0 mt-3"}>{error}</h4>
                </div>
            </div >
        </>
    )
}