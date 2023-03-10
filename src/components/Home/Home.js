import React,{useState, useEffect} from "react";
import Post from "../Post/Post";
import PostForm from "../Post/PostForm";
function Home(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList , setPostList] = useState([]);

    const refreshPosts = () =>{
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
    }

    useEffect(() => {
        refreshPosts()
    },[postList])

    if(error){
        return <div> Error!!!</div>
    }else if(!isLoaded){
        return <div> Loading...</div>
    }else{
        return( 
            <div  style={{display:"flex",flexWrap:"wrap",justifyContent:"center",background:"#f0f5ff"}}>
                <PostForm userId={1} userName={"User"} refreshPosts= {refreshPosts} />
                    {postList.map(post => (
                        <Post likes = {post.postLikes} postId = {post.id} userId = {post.userId} userName = {post.userName}  
                        title={post.title} text={post.text}></Post>
                    ))}
              
            </div>

        );
    }
}

export default Home;