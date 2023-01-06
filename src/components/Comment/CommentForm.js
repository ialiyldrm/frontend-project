import { Avatar, Button, CardContent,  InputAdornment,  OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function CommentForm(props){
    const {userId,userName,postId} = props;
    const [text,setText] = useState("");

    const saveComment = () => {
        fetch("/comments", 
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                postId: postId, 
                userId : userId,
                text : text,
            }),
        })
      .then((res) => res.json())
      .catch((err) => console.log(err))
    }

    const handleSubmit = () => {
        saveComment();
        setText("");
    };
    
     const handleChange = (value) => {
        setText(value);
    } 
    return(
        <CardContent style={{display:"flex",flexWrap:"wrap",justifyContent:"flex start",alignItems:"center"}}>

         <OutlinedInput
        id="outlined-adornment-amount"
        multiline
        inputProps = {{maxLength : 250}}
        fullWidth
        onChange = {(i) => handleChange(i.target.value)}   
        startAdornment = {
            <InputAdornment position="start" >
                <Link  style={{ textDecoration: 'none', color: 'white',boxShadow : "none" }} to={{pathname : '/users/' + userId}} >
                    <Avatar sx={{  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)' }} aria-label="recipe">
                        {userName.charAt(0).toUpperCase()}
                    </Avatar>
                </Link>
            </InputAdornment>
        }
        endAdornment = {
            <InputAdornment possion ="end">
            <Button
                variant = "contained"
                style = {{background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                color: 'white'}}
                onClick = {handleSubmit}
            >Comment</Button>
            </InputAdornment>
        }
        value={text}
        style ={{color:"black",background:"white"}}
        ></OutlinedInput>   
        </CardContent>
    );
}

export default CommentForm;