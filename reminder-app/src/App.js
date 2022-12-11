import React, {useState} from 'react';

import './App.css';
import CreateNote from './component/CreateNote';
import ShowContent from './component/ShowContent';


function App() {
  const [titleValue, setTitleValue]=useState("")
  const [textAreaValue, setTextAreaValue]=useState("")

   const [dataOfNotes, setDataOfNotes]=useState([])
   const getValueTitle=(e)=>{
  setTitleValue(e.target.value)
   }
   const gextexTAreaValue=(e)=>{
    setTextAreaValue(e.target.value)

   }
   const addNotesValue=()=>{
   const newNotesValue=[...dataOfNotes]
    newNotesValue.push({id:new Date().getMilliseconds(),title:titleValue, description:textAreaValue })
    setDataOfNotes(newNotesValue)
    setTitleValue("")
    setTextAreaValue('')

  }
  const deleteNotes=(btnId)=>{
    setDataOfNotes((prevState)=>{
         const deletedData=prevState.filter((values)=>{
          return values.id!==btnId
         })
         return deletedData
    })
  }
  return (
    <>
     <CreateNote titleValue={titleValue} textAreaValue={textAreaValue} addNotesValue={addNotesValue} gextexTAreaValue={gextexTAreaValue} getValueTitle={getValueTitle} />
   <ShowContent deleteNotes={deleteNotes} dataOfNotes={dataOfNotes} />
      </>
  );
}

export default App;
