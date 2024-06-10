import React, { useEffect, useState } from "react";
import "./styles.css";
import "../../index.css";
import DefaultNoteBoxPage from "./DefaultNoteBoxPage/DefaultNoteBoxPage.jsx";
import sendbuttonblack from "../../assets/sendbuttonblack.svg";
import sendbutton from "../../assets/sendbutton.svg";
import backbtn from "../../assets/backbtn.svg";

function formatDateTime(date) {
  const optionsDate = { day: "numeric", month: "long", year: "numeric" };
  const optionsTime = { hour: "numeric", minute: "numeric", hour12: true };

  const formattedDate = new Intl.DateTimeFormat("en-US", optionsDate).format(
    date
  );
  const formattedTime = new Intl.DateTimeFormat("en-US", optionsTime).format(
    date
  );

  return { formattedDate, formattedTime };
}

export default function NoteChatBox({
  currentGrp,
  notesGrpArray,
  setNotesGrpArray,
  setCurrentGrp,
  setShowNotesChat,
  setShowGrpNavigation,
  showNotesChat,
}) {
  const [text, setText] = useState("");

  const now = new Date();
  const { formattedDate, formattedTime } = formatDateTime(now);

  //handle submission
  const handleNoteSubmit = () => {
    const noteObj = {
      Time: formattedTime,
      Date: formattedDate,
      Content: text,
    };

    const updatedGrpArray = notesGrpArray.map((item) => {
      if (item.id === currentGrp.id) {
        setCurrentGrp({ ...item, Notes: [...item.Notes, noteObj] });
        return { ...item, Notes: [...item.Notes, noteObj] };
      } else {
        return item;
      }
    });
    setNotesGrpArray(() => [...updatedGrpArray]);
    localStorage.setItem("NotesGrpArray", JSON.stringify(updatedGrpArray));
    setText("");
  };

  const isMobile = window.innerWidth <= 600;

  if (!currentGrp) return <DefaultNoteBoxPage />;

  return (
    <div className={`main-box ${isMobile && !showNotesChat ? "hidden" : ""}`}>
      <div className="notes-grpname-bar">
        <span>
          <img
            src={backbtn}
            alt="back-btn-icon"
            className="back-btn"
            onClick={() => {
              setShowNotesChat(false);
              setShowGrpNavigation(true);
            }}
          />
        </span>
        <div
          className="notes-grp-icon"
          style={{ backgroundColor: `${currentGrp?.Colour}` }}
        >
          {currentGrp.GroupName.length === 1
            ? currentGrp.GroupName.charAt(0).toUpperCase()
            : currentGrp.GroupName.slice(0, 2).toUpperCase()}
        </div>
        <h1 className="notes-grp-name">{currentGrp.GroupName}</h1>
      </div>

      <div className="notes-list customized-scrollbar">
        {currentGrp.Notes?.map((item) => {
          return (
            <div className="notes-list-item">
              <div className="meta-data">
                <p>{item?.Time}</p>
                <p>
                  {item?.Date?.split(",")[0] + " " + item?.Date?.split(",")[1]}
                </p>
              </div>
              <p className="note-para">{item?.Content}</p>
            </div>
          );
        })}
      </div>

      <div className="notes-input-box">
        <textarea
          className="notes-input-text-area"
          placeholder="Enter your text here..........."
          name="inputTextArea"
          value={text}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleNoteSubmit();
            }
          }}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        {text?.trim() === "" ? (
          <img
            className="notes-input-box-send-btn"
            src={sendbutton}
            alt=""
            disabled
          />
        ) : (
          <img
            className="notes-input-box-send-btn"
            src={sendbuttonblack}
            alt=""
            onClick={handleNoteSubmit}
          />
        )}
      </div>
    </div>
  );
}
