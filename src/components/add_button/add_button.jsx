import React from "react";
import "./add_button.scss";
// import { addVideoToPlayList } from "../../api/firebase/utils";
import { connect } from "react-redux";
import { addVideoStart } from "../../redux/user/user.actions";
const AddButton = (props) => {
  const { video, user, addVideoStart } = props;

  return (
    <div
      onClick={async () => {
        addVideoStart(user, video);
      }}
      className="add-button"
    ></div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addVideoStart: (user, video) => dispatch(addVideoStart(user, video)),
});
export default connect(null, mapDispatchToProps)(AddButton);
