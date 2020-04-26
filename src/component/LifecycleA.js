import React, { Component } from "react";
import { tsConstructorType } from "@babel/types";
import { object } from "prop-types";
import LifecycleB from "./LifecycleB";
class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Harshal"
    };
    console.log("lifecylcleA method contructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("life cycleA getDerivedStateFromsProps");
    return null;
  }
  componentDidMount() {
    console.log("life cycleA componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("life cycleA shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("life cycleA getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("life cycleA componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "Dalvi"
    });
  };
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        Life Cycle A
        <LifecycleB />
        <button onClick={this.changeState}>Submit</button>
      </div>
    );
  }
}
export default LifecycleA;
