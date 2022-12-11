import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';



const ShowContent=({dataOfNotes, deleteNotes})=>{
    return(
        <>
 <div className='main_content_div'>


{dataOfNotes.map((notes, index)=>{
 return(
   <>
     <div className='showDivNote'>
       <div className='content_div￼￼'>
         <h1>{notes.title}</h1>
         <p>{notes.description}</p>
         <div>
<button className='add_item' style={{backgroundColor:'red'}} onClick={()=>deleteNotes(notes.id)}>

<DeleteIcon />
</button>

</div>
       </div>
   </div>
   
   </>
 )
})}

 

   </div>
        </>
    )
}
export default ShowContent