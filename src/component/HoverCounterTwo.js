import React, { Component } from "react";

export class HoverCounterTwo extends Component {
  render() {
    const { count, inCrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={inCrementCount}>Hover {count} times</h2>
      </div>
    );
  }
}

export default HoverCounterTwo;
