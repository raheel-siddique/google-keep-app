import React from "react";
import AddIcon from '@mui/icons-material/Add';



const CreateNote=({titleValue, textAreaValue, addNotesValue, getValueTitle, gextexTAreaValue})=>{
    return(
        <>
           <div className='main_reminder_div'>
           <div className='filedsbox'>
           <input type="text" placeholder='title' name='title' value={titleValue} className='inputfieldfornote' onChange={getValueTitle} />
           <textarea className='textareacreatenorte' value={textAreaValue} id="create-note" name="descriptionNote" rows="4" cols="50" placeholder='create a note' onChange={gextexTAreaValue}>
</textarea> 
<div>

  <AddIcon fontSize='large' className='add_item' onClick={addNotesValue} />

</div>


           </div>
      </div>
        </>
    )
}
export default CreateNote