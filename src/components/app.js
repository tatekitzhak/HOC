import React from 'react';


function AuthWrapper(WrappedComponent) {
    return class extends React.Component {
        renderSwitch(param) {
            switch (param) {
                case 'one':
                    return (<WrappedComponent {...this.props}>
                        {console.log(this.props)}
                    </WrappedComponent>)
                case 'two':
                    return (<WrappedComponent {...this.props}>
                        {console.log(this.props)}
                    </WrappedComponent>)
                case 'three':
                    return (<WrappedComponent {...this.props}>
                        {console.log(this.props)}
                    </WrappedComponent>)
                default:
                    return console.log('default');
            }
        }
        render() {
            if (this.props.isLoggedIn) {
                { return this.renderSwitch(this.props.component) }
                
            }
            return <p>You're not logged in ☹️{console.log(this.props)}</p>
        }
    }
}

class RegularComponent extends React.Component {
    render() {
        return <p> Regular Component</p>
    }
}

class OtherRegularComponent extends React.Component {
    render() {
        return <p> Other Regualar Component </p>
    }
}

const FunctionalComponent = () => (<p> functional component </p>)

const WrappedOne = AuthWrapper(RegularComponent)
const WrappedTwo = AuthWrapper(OtherRegularComponent)
const WrappedThree = AuthWrapper(FunctionalComponent)

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    toggleAuth = () => {
        this.setState((prevState, props) => ({ isLoggedIn: !prevState.isLoggedIn }))
    }


    render() {
        const { isLoggedIn } = this.state
        return (
            <div>
                <button onClick={this.toggleAuth}>
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>
                <WrappedOne isLoggedIn={isLoggedIn} component={'one'} />
{/* 
                <WrappedTwo isLoggedIn={isLoggedIn} component={'two'} />
                <WrappedThree isLoggedIn={isLoggedIn} component={'three'} />
                 */}
            </div>
        );
    }
}

export default App;