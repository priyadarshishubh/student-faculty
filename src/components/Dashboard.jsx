import React, { Link ,Component} from 'react'
import MyProfile from "./MyProfile.jsx"
import Counter from "./Counter.js"
import BrowserRouter from 'react-router-dom';


import './App.css'


const Dashboard = () => {
    const authInstance = window.gapi.auth2.getAuthInstance()
    const user = authInstance.currentUser.get()
    const profile = user.getBasicProfile()
    const email = profile.getEmail()
    const imageUrl = profile.getImageUrl()

    return (
        <>
            <nav>
                <div>Student-Faculty Consultation Portal</div>
                <a className="push" href='/MyProfile'style={{color: "#FFFFFF"}}>My Profile</a>
                <div className="left">Faculty Information</div>
                <div className="left">My Consultations</div>
                {/* <h4> <Link to="/MyProfile">
                    <MyProfile/>
                </Link> </h4> */}
                <img  src={imageUrl}/>
                <div onClick={authInstance.signOut}>Logout</div>
                 
            </nav>
            <div >
                <Counter/>
            </div>
        </>
    )
}

export default Dashboard