import React, { Component } from "react";

export class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }
  async componentDidMount() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data[0]);
    this.setState({ post: data });
    //console.log(data[0]);
  }
  render() {
    const { post } = this.state;
    return (
      <div>
        {post.map(e => (
          <h1 key={e.id}>{e.title}</h1>
        ))}
      </div>
    );
  }
}

export default PostList;
