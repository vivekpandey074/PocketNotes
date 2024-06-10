import { useEffect, useState } from 'react'
import GroupNavigation from './components/GroupNavigation/GroupNavigation'
import NoteChatBox from './components/NoteChatbox/NoteChatBox'
import "./index.css";


function App() {
  const [notesGrpArray,setNotesGrpArray]=useState([]);
  const [currentGrp,setCurrentGrp]=useState(null);

  useEffect(()=>{
   const NotesGrpArray=JSON.parse(localStorage.getItem("NotesGrpArray")) || [];

   setNotesGrpArray(()=>NotesGrpArray);
  },[])
  


  return (
    <div className='display-flex-row '>
     <GroupNavigation notesGrpArray={notesGrpArray} setNotesGrpArray={setNotesGrpArray} setCurrentGrp={setCurrentGrp}/>
     <NoteChatBox currentGrp={currentGrp} notesGrpArray={notesGrpArray} setNotesGrpArray={setNotesGrpArray} setCurrentGrp={setCurrentGrp}/>    
    </div>
  )
}

export default App
