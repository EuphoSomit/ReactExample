import React, { Component } from 'react';
import { Link } from 'react-router'
import Loader from './coreComponents/Loader';

class Products extends Component {

    constructor(props) {

        super(props);
        this.state = {
            loaded: false,
            products: []
        };
        this.handleAdd = this.handleAdd.bind(this);
    } 

    componentDidMount() {
        this.ProductList();
    }

    ProductList() {
        var self=this;
        fetch('https://api.myjson.com/bins/ax86t').then(function(response) { 
            // Convert to JSON
            return response.json();
        }).then(function(data) {
            self.setState({
                products: data,
                loaded: true
            }); 
        });
    }
    
    handleAdd(name) {
        const products = this.state.products.slice();
        products.push({name});
        this.setState({ products });
    }

    render() {
        return (
                <Loader loaded={this.state.loaded} loadedClassName="App-intro">
                    <ul>
                        {this.state.products.map((product, index) => (
                            <li key={index}>
                                <Link to={`/product/${product.name}`}>{product.name}</Link>
                            </li>
                        ))}
                    </ul>
                    {this.props.children && React.cloneElement(this.props.children, {
                        onAdd: this.handleAdd
                    })}
                </Loader>
        );
    }
}
;

export default Products;