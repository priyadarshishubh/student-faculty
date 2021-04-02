import React, { Component } from 'react'


class LoginPage extends React.Component {
    componentDidMount() {
        window.gapi.load('signin2', () => {
            window.gapi.signin2.render('login-button')
        })
    }

    render() {
        const styles1 ={
            color: "#4285F4",
            paddingTop: "100px",
            textAlign:"center",
          }
          const styles2 ={
            paddingTop: "100px",
            textAlign:"center",
          }
          const styles3 ={
            paddingTop: "5px",
            textAlign:"center", 
            color: "#4285F4",
          }

        return (
            <div className="container">
                <h1 style={styles1}>Student Faculty Consultation Portal</h1>
                <h3 style={styles2}>Login</h3>
                <div style={styles3} id="login-button">Sign in with Google</div>
            </div>
        )
    }
}

export default LoginPage