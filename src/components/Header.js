import React, { PropTypes, Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
    
    static get defaultProps() {
        return {
            welcomeText: "Welcome to React CODE"
        };
    }

    static get propTypes() {
        return {
            welcomeText: PropTypes.string
        };
    }
    
    shouldComponentUpdate(nextProps){
        
        if(nextProps.welcomeText === this.props.welcomeText){
            return false;
        }else{
            return true;
        }
    }

    render() {
        return (
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>{this.props.welcomeText}</h2>
                </div>

                );
    }
};

export default Header;