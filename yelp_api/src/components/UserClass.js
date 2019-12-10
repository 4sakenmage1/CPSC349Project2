import React, {Component} from 'react';
import Restaurants from './DisplayRestaurant'

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      username:"",
      password:"",
      liked_Disliked: []
    };
  }

  handleClickLike = () => {
    const restaurant = Restaurants.id;
    this.setState({
      liked_Disliked: [this.state.liked_Disliked, { restaurant: true}]
    });
    console.log(this.state.liked_Disliked)

  };
  handleClickDislike = () => {
    let newIndex = this.state.index < this.state.length ? this.state.index += 1 : 0;
    console.log(newIndex);
    this.setState({index: newIndex});
  };
render() {
  return (
  <div>
  <button name ='LikeButton' onClick={this.handleClickLike}>Like</button>
  </div>)
  }
};



 export default User;
