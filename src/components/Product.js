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
	//Wrong way, try not to put props in state
        this.setState({
          productName: this.props.params.productId
        });
    }
    
    componentWillReceiveProps(nextProps){
	console.log("Passing Props");
        if(nextProps.params.productId !== this.props.params.productId){
	    console.log("Passing Props check");
            this.setState({
              productName: nextProps.params.productId
            }); 
        }
    }

    shouldComponentUpdate(nextProps,nextState){

	//if(nextProps.params.productId !== this.props.params.productId){
	  //return true; 
        //}else{
	  //return false;
	//}
    }
    
    handleAdd(e) {
        e.preventDefault();
        this.props.onAdd(this.state.name);
    }
    
    render() {
	console.log("Render when state change");
    return (
        <div>
            <h2>{this.state.productName}{/*this.props.params.productId*/}</h2>
	    <h3>Controlled Component</h3>
            <input type="text" name="name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}></input>
            <button onClick={this.handleAdd}>Add</button>
        </div>          
    );
  }
};

export default Product;
