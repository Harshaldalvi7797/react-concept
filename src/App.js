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
import Input from "./component/Input ";
import FocusInput from "./component/focusInput";

class App extends Component {
  render() {
    return (
      <div className="container">
        <FocusInput />
        {/* <Input /> */}
        {/* <RefsDemo /> */}
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
