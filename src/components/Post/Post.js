import React, { useState } from "react";
import {Link} from "react-router-dom";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function Post(props){
    const [expanded, setExpanded] = React.useState(false);
    const {title,text,userName,userId} = props;
    const [like,setLike] = useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleLike = () => {
        setLike(!like);
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
                        title={title}  
                    />
                    
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        {text}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton 
                        onClick = {handleLike}
                        aria-label="add to favorites">
                        <FavoriteIcon style={like? {color:"red"}: null } />
                        </IconButton>
                        <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <CommentIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        
                        </CardContent>
                    </Collapse>
                </Card>
        </div>
    )
    
}

export default Post;