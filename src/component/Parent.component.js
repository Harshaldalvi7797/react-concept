import React, { Component } from "react";
import Reg from "./Reg.component";
import Pure from "./Pure.component";
import MemoComponent from "./Memo";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "harshal"
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "harshal" });
    }, 2000);
  }
  render() {
    console.log("*****Parent component*********");
    return (
      <div>
        <MemoComponent name={this.state.name} />
        {/* Parent Component
        <Reg name={this.state.name} />
        <Pure name={this.state.name} /> */}
      </div>
    );
  }
}
export default Parent;
