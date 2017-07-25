import React, { Component } from 'react';
import '../styles/App.css';
// Import BaseLayout, Appetizers, Entrees, Desserts
import BaseLayout from "./Layout"
import Appetizers from "./Appetizers"
import Desserts from "./Desserts"
import Entrees from "./Entrees"



class App extends Component {
// Set initial state for appetizers, entrees, and desserts.
// All should be set to empty arrays.
constructor(props) {

  super(props)

  this.state = {
    appetizers: [],
    entrees: [],
    desserts: []
  }

}

// Lifecycle method
componentDidMount() {
  fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
  .then(results => results.json())
    .then(Data => {
      this.setState({
        appetizers: Data[0].Appetizers,
        entrees: Data[0].Entrees,
        desserts: Data[0].Desserts
      });
      console.log(this.state)
    })
}


  render() {
    // Your render should consist of the BaseLayout with the following children components: Appetizers, Entrees, and Dessert.
    // Each component needs to receive state via props.
    return (

      <BaseLayout>
        <Appetizers items={this.state.appetizers}/>
        <Entrees items={this.state.entrees}/>
        <Desserts items={this.state.desserts}/>
      </BaseLayout>

    )
  }
}

export default App;
