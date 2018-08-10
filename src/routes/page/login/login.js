import React, { Component } from 'react';
// import G from './../../../gobal';

import Loginbox from './components/login'


export default class Login extends Component {


    render() {
        // const { products } = this.props;
        return (
            <div>
                <h2>List of Products</h2>
                <Loginbox />
            </div>
        );
    }
}
