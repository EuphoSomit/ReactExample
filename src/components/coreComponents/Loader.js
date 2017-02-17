/*******************************************/
/************ LOADER COMPONENT ************/
/******* created by @somit.kumar *********/
/**** CSS & IMAGE file need to include **/
/***************************************/
import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../../logo.svg';

class Loader extends Component {
    
    constructor(props) {

        super(props);
        this.state = {
            loaded: false
        };
    }
    
    static get defaultProps() {
        return {
            className: 'lzyldr',
            component: 'div',
            loadedClassName: 'loadedContent',
            parentClassName: 'lzyldrwp',
            msgText : 'loading..'
        };
    }

    static get propTypes() {
        return {
            className:       PropTypes.string, // for loader icon-image
            component:       PropTypes.any, // starting tag (div)(ul)..
            loaded:          PropTypes.bool, // true or false
            loadedClassName: PropTypes.string, //if loader is not there, under that 'div' is showing
            parentClassName: PropTypes.string, // if loader is there
            msgText:         PropTypes.string // show text
        };
    }
    
    componentDidMount(){
       this.updateState(this.props); 
    }
    
    componentWillReceiveProps(nextProps) {
      this.updateState(nextProps);
    }
    
    updateState(props) {
      props || (props = {});

      var loaded = this.state.loaded;

      // update loaded state, if supplied
      if ('loaded' in props) {
        loaded = !!props.loaded;
      }

      this.setState({ loaded: loaded }, this.load);
    }

    load(){
      if (!this.state.loaded) {
        
        var target =  ReactDOM.findDOMNode(this.refs.loader);

        // clear out any other spinners from previous renders
        target.innerHTML = '';
        target.innerHTML = '<img src='+ logo +' class="App-logo" alt="logo" /><h4>' + this.props.msgText +'</h4>';
      }
    }

    render() {
        var props, children;

        if (this.state.loaded) {
            props = {key: 'content', className: this.props.loadedClassName};
            children = this.props.children;
        } else {
            props = {key: 'loader', ref: 'loader', className: this.props.parentClassName};
        }

        return React.createElement(this.props.component, props, children);
    }
};

export default Loader;