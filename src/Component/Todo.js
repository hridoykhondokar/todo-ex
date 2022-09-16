import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



const Todo = () => {
    return (
        <div className=" todo_data col-lg-5 mx-auto mt-2">
            <div className="d-flex justify-content-between align-items-center px-2" style={{backgroundColor: "#dcdde1",height: "45px"}}>
             <li style={{listStyle:"none"}}>react redux app</li>
             <div className="edit-dle col-lg-3 py-2 d-flex justify-content-between">
                <EditIcon style={{color:"#3c40c6", cursor: "pointer"}}></EditIcon>
                <DeleteIcon style={{color:"red", cursor: "pointer"}}></DeleteIcon>
               <RemoveRedEyeIcon style={{color:"#1dd1a1", cursor: "pointer"}}></RemoveRedEyeIcon>
             </div>
            </div>
        </div>
    );
};

export default Todo;