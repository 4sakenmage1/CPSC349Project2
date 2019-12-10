/* jshint esversion: 6 */
import React, { Component } from "react";
import yelp from 'yelp-fusion';
import axios from 'axios';



class DisplayRestaurant extends Component {
  constructor() {
    super();
    this.state = {
      restaurantList: [],
      index: 0,
    };
  }

  componentWillMount() {

    const defaultSettings = {
      location: "90620",
      sort: "best_match",
      price: "1,2,3,4"
    };


    axios.get(`
      https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${defaultSettings.location}&sort_by=${defaultSettings.sort}&price=${defaultSettings.price}`,
      {
      headers: {
        Authorization: 'Bearer 0CXTw0A9ICuRceSreQ0EKan6-sqY9fUcyyQU7_S5BPdEWPVOObcEeia5boBWT_3c3TVVRxbfScCTBxeXHnJiIA-Dn2BAu6pYrWsWiLQ_IEyYM2C95eAkeC8e7CfnXXYx'
      },
      params: {
        limit: '3',
      }
    })
    .then((results) => {
      console.log(results.data.businesses);
      this.setState({restaurantList: results.data.businesses});
      console.log("State Now: ", this.state.restaurantList);
    })
    .catch((err) => {
      console.log("You are an error: ", err);
    });
  }

  handleClick = () => {
    let newIndex = this.state.index < this.state.length ? this.state.index += 1 : 0;
    console.log(newIndex);
    this.setState({index: newIndex});
  };

  render() {
    const Restaurants = this.state.restaurantList.map((result) => {
      return (
        <div key={result.id}>
          <img src={result.image_url}/>
          <h2> Name: {result.name} </h2>
          <p> Address: {result.location.display_address[0]}, {result.location.display_address[1]} </p>
          <p> Phone: {result.phone} </p>
          <p> Rating: {result.rating} </p>
          <p> Price: {result.price}</p>
        </div>
      );
    });


    return (
      <div>
        <h1> Hello There </h1>
        <button onClick={this.handleClick}> Next </button>
        <div> {Restaurants[this.state.index]} </div>
      </div>
    )
  }
}


export default DisplayRestaurant;
