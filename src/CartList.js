import React, { Component } from 'react';
import CartSelected from './CartSelected';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
class CartList extends Component {
  render() {
return (
    <section className="main__summary">
  <h2>Your cart</h2>
  <CartSelected 
  features= {this.props.features} 
  selected= {this.props.selected}/>
  {this.props.summary}
  <div className="summary__total">
    <div className="summary__total__label">Total</div>
    <div className="summary__total__value">
     {USCurrencyFormat.format(this.props.total)}
    </div>
  
  </div>
</section>
);
  }

}
export default CartList; 