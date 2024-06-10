import { useEffect, useState } from "react";
import GroupNavigation from "./components/GroupNavigation/GroupNavigation";
import NoteChatBox from "./components/NoteChatbox/NoteChatBox";
import "./index.css";

function App() {
  const [notesGrpArray, setNotesGrpArray] = useState([]);
  const [currentGrp, setCurrentGrp] = useState(null);
  const [showGrpNavigation, setShowGrpNavigation] = useState(true);
  const [showNotesChat, setShowNotesChat] = useState(false);

  useEffect(() => {
    const NotesGrpArray =
      JSON.parse(localStorage.getItem("NotesGrpArray")) || [];

    setNotesGrpArray(() => NotesGrpArray);
  }, []);

  return (
    <div className="display-flex-row ">
      <GroupNavigation
        notesGrpArray={notesGrpArray}
        setNotesGrpArray={setNotesGrpArray}
        setCurrentGrp={setCurrentGrp}
        showGrpNavigation={showGrpNavigation}
        setShowGrpNavigation={setShowGrpNavigation}
        setShowNotesChat={setShowNotesChat}
      />
      <NoteChatBox
        currentGrp={currentGrp}
        notesGrpArray={notesGrpArray}
        setNotesGrpArray={setNotesGrpArray}
        setCurrentGrp={setCurrentGrp}
        showNotesChat={showNotesChat}
        setShowNotesChat={setShowNotesChat}
        setShowGrpNavigation={setShowGrpNavigation}
      />
    </div>
  );
}

export default App;
