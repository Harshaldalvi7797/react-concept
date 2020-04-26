import React, { Component } from "react";
import { tsConstructorType } from "@babel/types";
import { object } from "prop-types";
class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Harshal"
    };
    console.log("lifecylcleB method contructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("life cycleB getDerivedStateFromsProps");
    return null;
  }
  componentDidMount() {
    console.log("life cycleB componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("life cycleB shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("life cycleB getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("life cycleB componentDidUpdate");
  }
  render() {
    console.log("LifecycleB render");
    return <div>Life Cycle B</div>;
  }
}
export default LifecycleB;
