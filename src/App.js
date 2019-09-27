import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Planet from "./components/Planet";
import Header from "./components/Header";
import planets from "./planets.json"
import "./App.css";
import('normalize.css');


class App extends Component {

  state = {
    planets,
    score: 0,
    highscore: 0,
    message: ""
  }

  gameOver = () => {

    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score, message: ""}, function () {
        console.log(this.state.highscore);
      });

    }
    this.state.planets.forEach(planet => {
      planet.count = 0;
    });

    this.setState({
      score: 0,
    });
    return true;
  }


  counter = id => {

    this.state.planets.find((p, i) => {
      if (p.id === id) {
        if (planets[i].count === 0) {
          planets[i].count = planets[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.planets.sort(() => 0.5 - Math.random());
          return true;
        } else {
          // this.setState({message: "Game Over!!!"})
          this.gameOver();
        }
      }
      return false;
    });
  }



  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore} title={"Space Clicky Game"} message={this.state.message} />
        <div className="content-container">
          {this.state.planets.map(planet => (
            <Planet
              counter={this.counter}
              id={planet.id}
              key={planet.id}
              image={planet.image}
              name={planet.name}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
