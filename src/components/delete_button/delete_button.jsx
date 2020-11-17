import React from "react";
import "./delete_button.scss";
// import { addVideoToPlayList } from "../../api/firebase/utils";
import { connect } from "react-redux";
import { deleteVideoStart } from "../../redux/user/user.actions";
const DeleteButton = (props) => {
  const { video, user, deleteVideoStart } = props;

  return (
    <div
      onClick={async () => {
        deleteVideoStart(user, video);
      }}
      className="delete-button"
    ></div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteVideoStart: (user, video) => dispatch(deleteVideoStart(user, video)),
});
export default connect(null, mapDispatchToProps)(DeleteButton);
