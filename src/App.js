import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./component/form";
import LifecycleA from "./component/LifecycleA";
import FragmentDemo from "./component/Fragment.Demo";
import Table from "./component/Table";
import Pure from "./component/Pure.component";
import Parent from "./component/Parent.component";
import RefsDemo from "./component/RefsDemo";

class App extends Component {
  render() {
    return (
      <div className="container">
        <RefsDemo />
        {/* <Parent /> */}
        {/* <FragmentDemo /> */}
        {/* <Table /> */}
        {/* <Form />
        <LifecycleA /> */}
      </div>
    );
  }
}

export default App;
