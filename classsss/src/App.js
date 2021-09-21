import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

class App extends Component {
  state = {
    fullName: "rafik",
    bio: 20,
    imgSrc: "Image.jpg",
    profession: "développeur",
    bool: false,
  };
  tickHandler = () => {
    this.setState({ time: this.state.time + 1 });

    return this.state.time;
  };

  componentDidMount() {
    var timer = setInterval(this.tickHandler, 100);
    this.setState({ time: timer });
  }

  render() {
    const handleReload = () => {
      {
        this.setState({
          bool: !this.state.bool,
        });
      }
    };
    const displaytime = () => {
      if (this.state.time < 60) {
        return this.state.time + "Seconds(s)";
      }

      const SS = this.state.time % 60;
      const MM = parseInt((this.state.time / 60) % 60);
      const HH = (this.state.time / (60 * 60)).toFixed(0);
      return `${HH}H: ${MM}m: ${SS}s`;
    };
    return (
      <div>
        <div style={{ margin: "10% 45%", borderColor: "red" }}>
          <BootstrapSwitchButton
            width={100}
            height={50}
            onstyle="outline-primary"
            offstyle="outline-secondary"
            onChange={() => {
              handleReload();
            }}
          />
          {this.state.bool === true ? (
            <h1>
              {this.state.fullName}
              <br />
              {this.state.bio}
              <br />
              {this.state.imgSrc}
              <br />
              {this.state.profession}
            </h1>
          ) : null}
          <h6>{displaytime()} </h6>
        </div>
      </div>
    );
  }
}
export default App;
