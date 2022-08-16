import React from 'react';


function AuthWrapper(WrappedComponent) {
    return class extends React.Component {
        renderSwitch(param) {
            console.log("renderSwitch(param):",param.log)
            switch (param) {
                case 'Login':
                    return (<WrappedComponent {...this.props}>
                        {console.log("Login:",this.props.component)}
                    </WrappedComponent>)
                case 'Logout':
                    return (<WrappedComponent {...this.props}>
                        {console.log("Logout:",this.props.component)}
                    </WrappedComponent>)
                case 'Registration':
                    return (<WrappedComponent {...this.props}>
                        {console.log("Registration:",this.props.component)}
                    </WrappedComponent>)
                default:
                    return console.log('default');
            }
        }
        render() {
                console.log("render:",this.props.isLoggedIn.isLoggedIn)
            if (this.props.isLoggedIn.isLoggedIn) {
                 return this.renderSwitch(this.props.component) 
                
            }
            else
            
            // return <p>You're not logged in ☹️{console.log(this.props)}</p>
            

            { return this.renderSwitch(this.props.isLoggedIn) }
        }
    }
}

class Login extends React.Component {
    render() {
        return <p> Login Component</p>
    }
}

class Logout extends React.Component {
    render() {
        return <p> Logout Component </p>
    }
}

const Registration = () => (<p> Registration component </p>)

const LoginPage = AuthWrapper(Login)
const LogoutPage = AuthWrapper(Logout)
const RegistrationForm = AuthWrapper(Registration)

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            log: 'Registration'
        }
    }

    toggleAuth = () => {
        this.setState((prevState, props) => ({ isLoggedIn: !prevState.isLoggedIn,
            log: prevState.isLoggedIn ? 'Logout' : 'Login'}))
    }


    render() {
        const { isLoggedIn } = this.state
        return (
            <div>
                <button onClick={this.toggleAuth}>
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>
                <LoginPage isLoggedIn={this.state} component={'Login'} />

                <LogoutPage isLoggedIn={this.state} component={'Logout'} />
                <RegistrationForm isLoggedIn={this.state} component={'Registration'} />

                { console.log("App:",this.state)}
            </div>
        );
    }
}

export default App;