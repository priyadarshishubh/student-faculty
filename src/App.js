import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import './components/App.css'
import Dashboard from "./components/Dashboard.jsx"
import LoginPage from "./components/LoginPage"
import MyProfile from "./components/MyProfile.jsx"
import RequestConsultation from "./components/RequestConsultation.jsx"






const LandingPage = () => {
    return (
        <div className="container">
            <h1>Application</h1>
            
            <Link to="/dashboard">Login</Link>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSignedIn: null
        }
    }

    initializeGoogleSignIn() {
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: '456656809320-g23dod6rqlpu0v18gfd33aanh7sgqspn.apps.googleusercontent.com'
        }).then(() => {
          const authInstance =  window.gapi.auth2.getAuthInstance()
          const isSignedIn = authInstance.isSignedIn.get()
          this.setState({isSignedIn})

          authInstance.isSignedIn.listen(isSignedIn => {
            this.setState({isSignedIn})
          })
        })
      })
    }

    componentDidMount() {
      const script = document.createElement('script')
      script.src = 'https://apis.google.com/js/platform.js'
      script.onload = () => this.initializeGoogleSignIn()
      document.body.appendChild(script)
    }

    ifUserSignedIn(Component) {
        if (this.state.isSignedIn === null) {
            return (
                <h1></h1>
            )
            
        }
        return this.state.isSignedIn ?
            <Component/> :
            <LoginPage/>
    }

    render() {
        return (
            <BrowserRouter>                
                    {/* <Route exact path="/">
                        <LandingPage/>
                    </Route> */}
                    <Route exact path="/" render={() => this.ifUserSignedIn(Dashboard)}/>        
                    <Route path="/MyProfile" render={() => this.ifUserSignedIn(MyProfile)}/>
                    <Route path="/RequestConsultation" render={() => this.ifUserSignedIn(RequestConsultation)} />
            </BrowserRouter>
        )
    }
}

export default App