import React, { useState } from "react";
import "./styles.css";
import "../../index.css";
import uniqid from 'uniqid';



const colors=["#B38BFA","#FF79F2","#43E6FC","#F19576","#0047FF","#6691FF"]

const initialstate={
  GroupName:"",
  Colour:"#B38BFA",

}

export default function Modal({notesGrpArray,setNotesGrpArray,setShowModal}) {
  const [state,setState]=useState(initialstate)


  const {GroupName,Colour}=state


  const handlechange=(e)=>{
    setState(()=>({...state,[e.target.name]:e.target.value}));
  }

  const handleColorChange=(color)=>{
    setState(()=>({...state,Colour:color}))
  }

 
  // Time:formattedTime,Date:formattedDate


  const handleCreateNotesGroup=()=>{
   

    const newArray=[...notesGrpArray,{...state,Notes:[],id:uniqid()}]
       setNotesGrpArray(()=>newArray)

        localStorage.setItem("NotesGrpArray",JSON.stringify(newArray));
       setShowModal(false);
  }


  return (
    <div className="modal">
      <p className="create-heading">Create New Notes group</p>
      <div className="wrapper ">
        <p className="group-text">Group Name</p>
        <input className="grp-input" placeholder="Enter your group name..." type="text" onChange={handlechange} name="GroupName" value={GroupName} maxLength={30} />
      </div>
      <div className="wrapper">
        <p className="choose-color-text">Choose colour</p>
        <div className="color-list">
          <div className={`color-item bg-purple ${Colour==="#B38BFA"?"selected":""}`} onClick={()=>handleColorChange("#B38BFA")}></div>
          <div className={`color-item bg-pink ${Colour==="#FF79F2"?"selected":""}`} onClick={()=>handleColorChange("#FF79F2")}></div>
          <div className={`color-item bg-aqua ${Colour==="#43E6FC"?"selected":""}`} onClick={()=>handleColorChange("#43E6FC")}></div>
          <div className={`color-item bg-orange ${Colour==="#F19576"?"selected":""}`} onClick={()=>handleColorChange("#F19576")}></div>
          <div className={`color-item bg-blue ${Colour==="#0047FF"?"selected":""}`} onClick={()=>handleColorChange("#0047FF")}></div>
          <div className={`color-item bg-lightblue ${Colour==="#6691FF"?"selected":""} `} onClick={()=>handleColorChange("#6691FF")}></div>
        </div>
        
      </div>
      <button className="create-btn" onClick={handleCreateNotesGroup} disabled={GroupName===""}>Create</button>
    </div>
  );
}
