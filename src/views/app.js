import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import CommentList from 'views/components/comment-list/comment-list';
import CommentBox from 'views/components/comment-box/comment-box';
import { handleChangeAuth } from 'store/actions';

const App = ({ auth, handleChangeAuth }) => 
  <Fragment>
    <div className="top-bar shadow">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">My Cool App</li>
          <li><Link to="/">Home</Link></li>
          { auth ? <li><Link to="/post">Post a Comment</Link></li> : null }
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li>
            <button type="button" className="button" onClick={ () => handleChangeAuth(!auth) }>
              { auth ? 'Sign out' : 'Sign in' }
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div className="grid-container fluid">
      <div className="grid-x grid-padding-x grid-padding-y">
        <div className="cell medium-6 large-3">
          <Route exact path="/" component={ CommentList } />
          <Route exact path="/post" component={ CommentBox } />
        </div>
      </div>
    </div>
  </Fragment>;

App.defaultProps = {
  auth: false,
  handleChangeAuth: () => {},
};

export default connect(
  ({ auth }) => ({ auth }),
  { handleChangeAuth },
)(App);
