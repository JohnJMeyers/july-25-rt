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
constructor() {

  super()

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
    .then(responseData => {
      console.log(responseData)
      this.setState({
        appetizers: responseData.appetizers,
        entrees: responseData.entrees,
        desserts: responseData.desserts

      });
    })
}
// Fetch from http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu.
// The response should return an object with appetizers, entres, and desserts.
// Set these to state.
// YOUR CODE HERE>

  render() {
    // Your render should consist of the BaseLayout with the following children components: Appetizers, Entrees, and Dessert.
    // Each component needs to receive state via props.
    return (

      <BaseLayout>
        <Appetizers />
        <Entrees />
        <Desserts />
      </BaseLayout>

    )
  }
}

export default App;
