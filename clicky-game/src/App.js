import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Navbar from "./components/Navbar";
let shuffleArr = require("shuffle-array");


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentScore: 0,
    highScore: 0
  };

  clicked = (id) => {
    let friends = this.state.friends;
    let currentScore = this.state.currentScore;
    let targetFriend = {};

    friends.forEach((element) => {
      if (element.id === id) {
        targetFriend = element;
      }
    });
    if (targetFriend.clicked === false) {
      targetFriend.clicked = true;
      currentScore++;
      shuffleArr(friends);
      this.setState({ currentScore, friends });
    } else {
      this.endGame();
    }
  }

  endGame = () => {
    let highScore = this.state.highScore;
    let currentScore = this.state.currentScore;
    let friends = this.state.friends;

    if (currentScore > highScore) {
      highScore = currentScore;
    }
    currentScore = 0;
    friends.forEach((element) => {
      element.clicked = false;
    });
    shuffleArr(friends);
    this.setState({ friends, currentScore, highScore });
  }



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    let highScore = this.state.highScore;
    let currentScore = this.state.currentScore;
    return (
      <div>
        <Navbar
          current={currentScore}
          high={highScore}
        />
        <Wrapper>
          {/* <Title>Friends List</Title> */}
          {this.state.friends.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              image={friend.image}
              clicked={this.clicked}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
