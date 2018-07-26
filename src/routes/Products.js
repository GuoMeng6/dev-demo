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

  render() {
    console.log('======= G ======== ', G);

    const { products } = this.props;
    return (
      <div>
        <h2>List of Products</h2>
        <ProductList onDelete={this.handleDelete.bind(this)} products={products} />
      </div>
    );
  }
}

// const Products = ({ dispatch, products }) => {
//   function handleDelete(id) {
//     dispatch({
//       type: 'products/delete',
//       payload: id,
//     });
//   }
//   return (
//     <div>
//       <h2>List of Products</h2>
//       <ProductList onDelete={handleDelete} products={products} />
//     </div>
//   );
// };

// // export default Products;
// export default connect(({ products }) => ({
//   products,
// }))(Products);
