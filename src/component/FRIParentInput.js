import React, { Component } from "react";
import FRIInput from "./FRIInput";
class FRIParent extends Component {
  constructor(props) {
    super(props);
    this.InputRef = React.createRef();
  }
  clickHandle = () => {
    this.InputRef.current.focus();
  };

  render() {
    return (
      <div>
        <FRIInput ref={this.InputRef} />
        <button onClick={this.clickHandle}>Focus</button>
      </div>
    );
  }
}
export default FRIParent;
