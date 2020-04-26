import React, { Component } from "react";

export class ClickcounterTwo extends Component {
  render() {
    const { count, inCrementCount } = this.props;
    return (
      <div>
        <button onClick={inCrementCount}>clicked {count} times</button>
      </div>
    );
  }
}

export default ClickcounterTwo;
