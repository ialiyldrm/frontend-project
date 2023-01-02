import React, { useState } from "react";
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, InputAdornment, OutlinedInput } from "@mui/material";



function PostForm(props){

    const {userName,userId} = props;
    const [text,setText] = useState("");
    const [title,setTitle] = useState("");
    

   const savePost = () => {
        fetch("/posts", 
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                title: title, 
                userId : userId,
                text : text,
            }),
        })
      .then((res) => res.json())
      .catch((err) => console.log(err))
    }
 
    const handleTitle= (value) => {
       setTitle(value);
      
    };

    const handleText = (value) => {
       setText(value);
      
    };

    const handleSubmit = () => {
       savePost();
    };

   
    return(
        <div className="postContainer" >
                <Card sx={{width: 800,margin : 5, textAlign : "left" }}>
                    <CardHeader
                        avatar={
                        <Link  style={{ textDecoration: 'none', color: 'white',boxShadow : "none" }} to={{pathname : '/users/' + userId}} >
                        <Avatar sx={{  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)' }} aria-label="recipe">
                            {userName.charAt(0).toUpperCase()}
                        </Avatar>
                        </Link>
                        }
                        title={<OutlinedInput  
                        id="outlined-adornment-amount"
                        multiline
                        placeholder = "Title"
                        inputProps = {{maxLength : 25}}
                        fullWidth
                        value = {title}
                        onChange = { (i) => handleTitle(i.target.value)}
                         
                        >
                        </OutlinedInput>}  
                    />
                    
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        <OutlinedInput  
                        id="outlined-adornment-amount"
                        multiline
                        placeholder = "Text"                    
                        inputProps = {{maxLength : 250}}
                        fullWidth
                        value = {text}
                        onChange = { (i) => handleText(i.target.value)}
                        endAdornment = {
                            <InputAdornment position = "end">
                            <Button
                            variant = "contained"
                            style = {{background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                            color: 'white'}}
                            onClick = {handleSubmit}
                            >Post</Button>
                            </InputAdornment>
                        }
                        
                        >
                        </OutlinedInput>
                        </Typography>
                    </CardContent>
                   
                </Card>
        </div>
    )
    
}

export default PostForm;