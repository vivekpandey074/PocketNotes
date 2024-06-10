import React, { useState } from "react";
import "./styles.css";
import "../../index.css";
import Modal from "../Modal/Modal";

export default function GroupNavigation({
  notesGrpArray,
  setNotesGrpArray,
  setCurrentGrp,
  showGrpNavigation,
  setShowGrpNavigation,
  setShowNotesChat,
}) {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(-1);

  const isMobile = window.innerWidth <= 600;

  return (
    <>
      <div
        className={`GroupBox  ${
          isMobile && !showGrpNavigation ? "hidden" : ""
        }`}
      >
        <h2 className="Pocket-Notes-Heading">Pocket Notes</h2>

        <div className="grp-wrapper  display-flex-col align-items-center">
          <button className="create-notes-group-btn">
            <span style={{ marginLeft: "5px", marginRight: "15px" }}>+</span>
            <p onClick={() => setShowModal(true)}>Create Notes group</p>
          </button>

          <div className="group-list  customized-scrollbar">
            {notesGrpArray.map((item, index) => {
              return (
                <div
                  className={`group-item display-flex-row ${
                    active === index ? "bg-brown" : ""
                  }`}
                  onClick={() => {
                    setCurrentGrp(item);
                    setActive(index);

                    if (isMobile) {
                      setShowNotesChat(true);
                      setShowGrpNavigation(false);
                    }
                  }}
                >
                  <div
                    className="group-img"
                    style={{ backgroundColor: `${item?.Colour}` }}
                  >
                    <p>
                      {item?.GroupName?.length === 1
                        ? item?.GroupName?.charAt(0).toUpperCase()
                        : item?.GroupName?.slice(0, 2).toUpperCase()}
                    </p>
                  </div>
                  <h3 className="group-name">
                    {/* max length should be 25 */}
                    {item?.GroupName}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="overlay" onClick={() => setShowModal(false)}></div>
          <Modal
            setShowModal={setShowModal}
            notesGrpArray={notesGrpArray}
            setNotesGrpArray={setNotesGrpArray}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
