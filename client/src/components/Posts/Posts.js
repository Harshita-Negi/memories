import React from "react";
import Post from "./Post/Post.js"
import useStyles from "./style"
import { useSelector } from "react-redux";

import { Grid, CircularProgress } from "@material-ui/core";


const Posts = ({setCurrentId})=>{
    
  const posts = useSelector((state)=>{ return state.posts;  }) 
  // state have posts because, in reducer/index.js we have stored all Posts by the name of "posts"
   
  const classes = useStyles();
  
  console.log(posts);
  return(
        !posts.length ? <CircularProgress /> : (
          <Grid className={classes.container } container alignItems="stretch" spacing={3}> 
                   {
                     posts.map((post)=>(
                        <Grid item key={post._id} sm={6} md={6}>
                           <Post post = {post} setCurrentId = {setCurrentId}/>                           
                        </Grid>
                     ))
                   } 
          </Grid>
        )
  )
}

export default Posts;