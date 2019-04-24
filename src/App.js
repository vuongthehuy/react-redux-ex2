import React, { Component } from 'react';

import './App.css';
import ItemContainer from './containers/item';
import Item_Detail from './containers/item-detail';
class App extends Component {
  render() {
    return (
      <div className="App">
      <ItemContainer/>
          <Item_Detail/>
      </div>
    );
  }
}

export default App;
