import React, { Component } from 'react';
import PartList from './PartList';
import CartList from './CartList';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes


import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values

class App extends Component {
  constructor(props) {
  super (props);
  this.state = {
    // default selected items that should go to CartList
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };
}
// updates state with new selections
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
        <PartList
        features= {this.props.features}
        selected= {this.state.selected} />
        <CartList 
        features= {this.props.features}
        selected= {this.state.selected} 
        />

        </main>
      </div>
    );
  }
}

export default App;
