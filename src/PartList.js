import React, {Component} from 'react';
import PartOptions from './PartOptions'
// import PartOptions from './PartOptions'
// import slugify from 'slugify';

// const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD'
// });

class PartList extends Component{
  render () {
    console.log(this.props.features)
    return ( <form className="main__form">
    <h2>Customize your laptop</h2>
    <PartOptions 
    features= {this.props.features} 
    selected= {this.props.selected}
    updateFeature = {this.props.updateFeature}/> 
  </form>
    )
  }
}
export default PartList;