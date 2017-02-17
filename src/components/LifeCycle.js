import React, { Component } from 'react';

class LifeCycle extends Component {
    
    constructor(props) {

        super(props);
        var events = ["Got initial state"];
        this.state = {
            events: events,
            loops: 0
        };
    }
    
    componentWillMount() {
        var events = this.state.events;
        events.push("Mounting component");
        this.setState({events: events});
    }

    componentDidMount() {
        var events = this.state.events;
        events.push("Component mounted");
        this.setState({events: events});
    }

    shouldComponentUpdate(nextProps, nextState) {
        nextState.events.push("Checked whether component should update");
        return nextState.loops < 5;
    }

    componentWillUpdate(nextProps, nextState) {
        nextState.events.push("Updating component");
    }

    componentDidUpdate(prevProps, prevState) {
        var loops = this.state.loops + 1;

        // This causes infinite loops
        var events = this.state.events;
        events.push("Component updated");

        this.setState({
            events: events,
            loops: loops
        });
    }

    render() {
        
        const eventNodes = this.state.events.map(event => <li>{event}</li>);

        return (
            <ul>
                {eventNodes}
            </ul>
        );
    }
};

export default LifeCycle;