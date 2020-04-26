import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  handlerUsernameChange = e => {
    this.setState({ username: e.target.value });
  };
  handlesubmit = e => {
    e.preventDefault();
    let data = {
      username: this.state.username
    };
    console.log(data);
  };

  render() {
    return (
      <div className="container">
        <h1>Form Component</h1>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={this.handlesubmit}>
              <div className="form-group">
                {" "}
                <input
                  type="text"
                  placeholder="Enter your Names"
                  className="form-control"
                  value={this.state.username}
                  onChange={this.handlerUsernameChange}
                />
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
