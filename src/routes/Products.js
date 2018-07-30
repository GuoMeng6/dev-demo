import React, { Component } from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import G from '../gobal';

@connect(({ products }) => ({
  products,
}))
export default class Products extends Component {
  handleDelete(id) {
    this.props.dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  componentDidMount() {
    this.getSource();
  }

  getSource() {
    G.request('get', 'reservation/getSource').then(res => {
      this.getDeskStatus(res.data);
    });
  }

  getDeskStatus(token) {
    G.request('get', 'desk/deskStatusInfos', {
      'token': token
    }, {
        params: {
          deskId: 'a776ba3b-b342-4913-a0ba-51a632d69689',
        },
        data: {

        }
      });
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <h2>List of Products</h2>
        <ProductList onDelete={this.handleDelete.bind(this)} products={products} />
      </div>
    );
  }
}
