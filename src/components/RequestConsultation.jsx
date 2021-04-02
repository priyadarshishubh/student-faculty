import React, { Component ,useState} from 'react'


import './App.css'


const RequestConsultation = () => {
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
            <div className='container'>
                        
            <table class="table">
                <thead>
                    <tr>
                    <th><a href="#"><h5 style={{color: 'rgb(60, 60, 255)'}}>Consultation Scheduling</h5></a></th>
                    <th><a href="#"><h5 style={{color: 'rgb(60, 60, 255)'}}>Prof</h5></a></th>
                    <th><a href="#"><h5 style={{color: 'rgb(60, 60, 255)'}}>Department</h5></a></th>
                    <th><a href="#"><h5 style={{color: 'rgb(60, 60, 255)'}}>Dep. code</h5></a></th>
                    </tr>
                </thead>
                </table>
                        <br/><br/>
                        <label for="ime">Time:</label>
                        <input type="time" value="time" name="time" />
                        <br/><br/>
                        <label for="date">Date:</label>
                        <input type="date" value="date" name="date" />
                        <br/><br/>
                        <div className="form-floating">
                        <textarea className="form-control" placeholder="Enter the purpose of meeting" id="floatingTextarea"></textarea>
                        <br/>
                        </div>
                        <button className="btn btn-primary">Submit</button>
            </div>
        </>        
    )
}

export default RequestConsultation





