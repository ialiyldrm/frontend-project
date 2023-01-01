import React,{useState, useEffect} from "react";
import Post from "../Post/Post";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Home(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList , setPostList] = useState([]);

    useEffect(() => {
        fetch("/posts")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setPostList(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])

    if(error){
        return <div> Error!!!</div>
    }else if(!isLoaded){
        return <div> Loading...</div>
    }else{
        return(
            <React.Fragment>
            <CssBaseline />
            <Container fixed sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",background:"#cfe8fc",height:"200vh"}}>
                <Box >
                {postList.map(post => (
                    <Post title={post.title}  text ={post.text}></Post>                       
                ))}
                </Box>
            </Container>
          </React.Fragment>
        );
    }
}

export default Home;