import React from "react";
import "./styles.css";
import "../../../index.css";
import lockicon from "../../../assets/lock-icon.svg";
import pocketnotesimg from "../../../assets/pocketnotesimg.svg";

export default function DefaultNoteBoxPage() {
  return (
    <div className="default-note-main-box">
      <div className="default-note-box ">
        <img  className="default-note-box-img" src={pocketnotesimg} alt="pocket-notes-image" />
        <p className="pocket-notes-text">Pocket Notes</p>
        <p className="default-note-box-text">
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
        <div className="encrypt-text-box">
          <img src={lockicon} alt="lock-icon" />
          <p className="">end-to-end encrypted</p>
        </div>
      </div>
    </div>
  );
}
