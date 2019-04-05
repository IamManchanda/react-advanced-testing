import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const CommentList = ({ comments }) => 
  <Fragment>
    <h4>Comment List</h4>
    <ul>
      { comments.map((comment) => <li key={ comment }>{ comment }</li>) }
    </ul>
  </Fragment>;

CommentList.defaultProps = {
  comments: [],
};

export default connect(
  ({ comments }) => ({ comments }),
)(CommentList);
