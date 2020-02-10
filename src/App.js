import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Counter from "./components/Counter";
import Message from "./components/Message";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0,
    clickMessage: "Click on every image once without clicking the same one twice."
  };
  // function for image being clicked
  clickImage = id => {
    // create a variable for the index of the clicked image
    let index = this.state.friends.findIndex(friend => friend.id === id);
    // if the clicked image's clicked value is false...
    if (this.state.friends[index].clicked) {
      this.setState({ clickMessage: "Sorry, that image has been clicked, you lose!" });
      this.setState({ count: 0 });
      this.setState({})
    } else {
    // ...randomize the array
    const friends = this.state.friends.sort(() => Math.random() - 0.5 );
    // change the clicked image's clicked value to true
    this.state.friends.find(newArray => newArray.id === id).clicked = true;
    // update the state of friends
    this.setState({ friends });
    // update the state of the count
    this.setState({ count: this.state.count + 1 });
      if (this.state.count == parseInt(11)) {
        this.setState({ clickMessage: "You win!" })
        this.setState({ count: 0 })
        this.setState({})
      }
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <Counter>Score: {this.state.count}</Counter>
        <Message>{this.state.clickMessage}</Message>
        {this.state.friends.map(friend => (
          <FriendCard
            clickMessage={this.clickMessage}
            clickImage={this.clickImage}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
