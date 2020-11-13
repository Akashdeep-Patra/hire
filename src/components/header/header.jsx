import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import SearchBar from "../search-bar/search-bar";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { signOutStart } from "../../redux/user/user.actions";
function Header({ currentUser, signOutStart }) {
  return (
    <div className="header">
      <SearchBar />
      {currentUser ? (
        <Link to="/" onClick={signOutStart}>
          SIGNOUT
        </Link>
      ) : (
        <Link to="/signin">SIGNIN</Link>
      )}
      <Link to="/">HOME</Link>
      <Link to="/player">PLAYER</Link>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
