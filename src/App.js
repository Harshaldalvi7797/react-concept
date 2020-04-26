// @ts-nocheck
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
import FRIParent from "./component/FRIParentInput";
import PortalDemo from "./component/portalDemo";
import ClickcounterTwo from "./component/clickCounterTwo";
import HoverCounterTwo from "./component/HoverCounterTwo";
import User from "./component/User";
import Counter from "./component/Counter";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Counter
          render={(count, inCrementCount) => (
            <ClickcounterTwo count={count} inCrementCount={inCrementCount} />
          )}
        />
        <Counter
          render={(count, inCrementCount) => (
            <HoverCounterTwo count={count} inCrementCount={inCrementCount} />
          )}
        />

        <User name={() => "Harshal"} />
        {/* <PortalDemo /> */}
        {/* <FRIParent /> */}
        {/* <FocusInput /> */}
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
