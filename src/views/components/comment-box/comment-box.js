import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleSaveComment, handleFetchComments } from 'store/actions';

const CommentBox = class extends Component {
  state = {
    comment: '',
  };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    const { comment } = this.state;
    const { handleSaveComment } = this.props;
    event.preventDefault();
    handleSaveComment(comment);
    this.setState({ comment: '' });
  };

  handleNotAuthUser = () => {
    const { auth, history } = this.props;
    if (!auth) history.push('/');
  }

  componentDidMount() {
    this.handleNotAuthUser();
  }

  componentDidUpdate() {
    this.handleNotAuthUser();
  }

  render() {
    const { comment } = this.state;
    const { handleFetchComments } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <h4>Post your Comment</h4>
        <textarea
          value={ comment }
          onChange={ this.handleChange }
          placeholder="Add a Comment" 
        />
        <button
          type="submit"
          className="button primary radius bordered shadow"
          id="save-comments">
          Submit Comment
        </button>
        <button
          type="button"
          className="button primary radius bordered shadow"
          id="fetch-comments" 
          onClick={ handleFetchComments }>Fetch Comments</button>
      </form>
    );
  }
};

CommentBox.defaultProps = {
  auth: false,
  handleSaveComment: () => {},
  handleFetchComments: () => {},
};

export default connect(
  ({ auth }) => ({ auth }), 
  { handleSaveComment, handleFetchComments },
)(CommentBox);