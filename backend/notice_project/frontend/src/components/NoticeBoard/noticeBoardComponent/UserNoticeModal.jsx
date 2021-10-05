import React from "react";
import "./UserNoticeModal.css";
import UserMenu from "./UserMenu/UserMenu";
import { Button } from "@material-ui/core";
import moment from "moment";

function UserNoticeModal({ notice }) {
  const id = String(notice._id);
  const modal_id = `modal_${id}`;
  const paragraphs = notice.message;

  const CloseModal = (event) => {
    const clickedButton = event.currentTarget.getAttribute("id");
    const modal_id = `modal_${clickedButton}`;
    document.getElementById(modal_id).style.display = "none";
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.getElementById(modal_id).style.display = "none";
    }
  });

  return (
    <div className="userNoticeModal" id={modal_id}>
      <div className="userNoticeModal-container">
        <div className="userNoticeModal-innerContainer">
          <div className="userNoticeModal-userInfo">
            <div className="userNoticeModal-imageAndText">
              <div className="userNoticeModal-imageContainer">
                <img
                  className="userNoticeModal-image"
                  src={
                    notice.author_img_url !== "null"
                      ? notice.author_img_url
                      : "https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="user"
                />
              </div>
              <div className="userNoticeModal-textContainer">
                <h1 className="userNoticeModal-username">
                  {notice.author_username}
                </h1>
                <div className="userNoticeModal-timeStamp">
                  <span className="userNoticeModal-stampDay">
                    {moment(notice.created).fromNow()}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <UserMenu noticeID={notice._id} />
            </div>
          </div>
          <div>
            <h2 className="userNoticeModal-title">{notice.title}</h2>
          </div>

          <p className="userNoticeModal-paragraph">{notice.message}</p>

          <div className="closeModalButton-container">
            <Button
              className="closeModalButton"
              variant="contained"
              id={id}
              onClick={(event) => CloseModal(event)}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserNoticeModal;
