import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import { createPost } from "../../../../store/actions/postActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/es/Button/Button";
import PreviewPhoto from "./PreviewPhoto";
class CreatePost extends Component {
  state = {
    title: "",
    content: "",
    picture: "",
    pictureUrl: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onChange = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        picture: file,
        pictureUrl: reader.result
      });
      //console.log("++++++++++++++++", this.state.picture);
    };
    reader.readAsDataURL(file);
  };

  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createPost(this.state);
    this.props.history.push("/posts");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
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
            <input
              accept="image/*"
              className=""
              id="imageFile"
              multiple
              type="file"
              onChange={this.onChange}
            />
            <label htmlFor="imageFile">
              <Button variant="contained" component="span" className="">
                Up load picture
              </Button>
            </label>

            <div>
              <button className="btn">Submit</button>
            </div>
          </form>
          <PreviewPhoto pictureUrl={this.state.pictureUrl} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
