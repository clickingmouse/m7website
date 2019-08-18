import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import { createPost } from "../../../../store/actions/postActions";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"
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
    //console.log(this.state);
    this.props.createPost(this.state);
  };

  render() {
    const {auth} =this.props;
    if(!auth.uid) return <Redirect to ='/signin'/>
    return (
      <div>
        <Container>
          <h1>Create New Post</h1>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title</label>
            <TextField
              id="title"
              label="...title"
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
              <button className="btn">Submit</button>
            </div>
          </form>
        </Container>
      </div>
    );
  }
}

const mapStateToPros =(this.state.)=>{
  return{
    auth:state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
