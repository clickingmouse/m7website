import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";

class CreatePost extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Container>
          <h1>Create New Post</h1>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title</label>
            <TextField
              id="title"
              label="Enter some title"
              placeholder="...title"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              margin="normal"
            />
            <br />
            <label htmlFor="content">Content</label>
            <TextField
              id="content"
              label="The experience"
              multiline
              rows="5"
              placeholder="...content"
              type="text"
              margin="normal"
              fullWidth
              helperText="Full width!"
              value={this.state.value}
              onChange={this.handleChange}
            />

            <div>
              <button>Submit</button>
            </div>
          </form>
        </Container>
      </div>
    );
  }
}

export default CreatePost;
