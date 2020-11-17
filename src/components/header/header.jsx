import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import SearchBar from "../search-bar/search-bar";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { signOutStart } from "../../redux/user/user.actions";
import { withRouter } from "react-router-dom";
import Gravatar from "react-gravatar";
function Header({ currentUser, signOutStart, history, match }) {
  // console.log(history);
  // console.log(match);
  return (
    <div className="header">
      <SearchBar />
      {currentUser ? (
        <div className="option">
          {" "}
          <Link to="/" onClick={signOutStart}>
            signout
          </Link>
        </div>
      ) : (
        <div className="option">
          {" "}
          <Link to="/signin">signin</Link>
        </div>
      )}
      <div className="option">
        <Link to="/">home</Link>
      </div>
      {currentUser ? (
        <div className="option">
          <Link to="/playlist">playlist</Link>
        </div>
      ) : null}
      <Gravatar
        email={currentUser ? currentUser.email : "abc@xyz.com"}
        size={50}
        forcedefault="y"
        default={
          currentUser
            ? currentUser.photoURL
              ? currentUser.photoURL
              : "mp"
            : "mp"
        }
        className="custom-gravatar"
      />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
