import React from "react";
import useStyles from "./style"
import { Card, CardActions, CardMedia, CardContent, Button, Typography } from "@mui/material"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from "moment"

import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts.js";

const Post = ( {post, setCurrentId} )=>{
    const dispatch = useDispatch();
    const classes = useStyles();
    
    return(
        <Card className={classes.card} >
          
          <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
          
          <div className={classes.overlay}>
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          </div>

          <div className={classes.overlay2}>
            <Button 
                style={{color:'white'}} 
                size="small" 
                onClick={()=> setCurrentId(post._id)}
            >
              <MoreHorizIcon fontSize="default"/>
            </Button>
          </div>

          <div className={classes.details}>
            <Typography variant="body2"> { post.tags.map((tag)=>`#${tag} `)} </Typography>
          </div>

          <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
          <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" >{post.message}</Typography>
          </CardContent>

          <CardActions className={classes.cardActions}>
             <Button 
                size="small" 
                onClick={ ()=> dispatch(likePost(post._id))}
              >
                <ThumbUpAltIcon fontSize="small"/>
                &nbsp;
                {post.likeCount}
                &nbsp;
                Like's
                
             </Button> 

             <Button 
                size="small" 
                onClick={ ()=> dispatch(deletePost(post._id))}
              >
                <DeleteIcon fontSize="small"/>
                Delete
             </Button>             
          </CardActions>

        </Card>
    )
}

export default Post;