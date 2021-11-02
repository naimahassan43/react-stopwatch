import React from "react";
import Title from "./Components/Title/Title.js";
import CountDown from "./Components/CountDown/CountDown.js";
import Controller from "./Components/Controller/Controller.js";

class App extends React.Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      time: {
        minutes: 0,
        seconds: 0,
        mili: 0,
      },
    };
  }

  // get start
  getStart() {
    this.intervalID = setInterval(() => {
      let minutes = this.state.time.minutes;
      let seconds = this.state.time.seconds;
      let mili = this.state.time.mili;

      if (mili >= 10) {
        seconds = seconds + 1;
        mili = 0;
      }

      if (seconds >= 60) {
        minutes = minutes + 1;
        seconds = 0;
      }
      this.setState({
        ...this.state,
        time: {
          minutes,
          seconds,
          mili: mili + 1,
        },
      });
    }, 100);
  }
  //get pause
  getPause() {
    clearInterval(this.intervalID);
  }
  //get lap
  getLap() {}
  //get reset
  getReset() {
    this.setState({
      time: {
        minutes: 0,
        seconds: 0,
        mili: 0,
      },
    });
  }
  //rendering
  render() {
    return (
      <div className="App">
        <div className="container py-5">
          <div className="row">
            <div className="col-8 offset-2">
              <Title />
              <CountDown time={this.state.time} />
              <Controller
                start={this.getStart.bind(this)}
                pause={this.getPause.bind(this)}
                reset={this.getReset.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
