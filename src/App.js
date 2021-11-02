import React from "react";
import Title from "./Components/Title/Title.js";
import CountDown from "./Components/CountDown/CountDown.js";

class App extends React.Component {
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
  render() {
    return (
      <div className="App">
        <div className="container py-5">
          <div className="row">
            <div className="col-8 offset-2">
              <Title />
              <CountDown time={this.state.time} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
