import React, { Component } from 'react';

class Product extends Component {
    
    constructor(props) {

        super(props);
        this.state = {
            productName : '',
            name:''
        };
        this.handleAdd = this.handleAdd.bind(this);
    } 
    
    
    componentDidMount() {
        this.setState({
          productName: this.props.params.productId
        });
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.params.productId !== this.props.params.productId){
            this.setState({
               productName: nextProps.params.productId
            }); 
        }
    }
    
    handleAdd(e) {
        e.preventDefault();
        this.props.onAdd(this.state.name);
    }
    
    render() {
    return (
        <div>
            <h2>{this.state.productName}</h2>
            <input type="text" name="name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}></input>
            <button onClick={this.handleAdd}>Add</button>
        </div>          
    );
  }
};

export default Product;