import React, { useEffect, useState } from "react"
import { TextField, Button, Typography, Paper } from "@mui/material"
import FileBase from "react-file-base64"
import { useDispatch , useSelector } from "react-redux"

import useStyles from "./style"
import { createPost, updatePost } from "../../actions/posts.js"

const Form = ({currentId, setCurrentId})=>{
    const classes = useStyles();
    const[postData, setPostData] = useState({
        title : '',
        message : '',
        creator : '',
        tags : '',
        selectedFile : ''
    });

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id == currentId ) : null)

    const dispatch = useDispatch();

    useEffect(()=>{
        if(post){
         setPostData(post);
        }
    }, [post])

    const handleSubmit = (e)=>{
      e.preventDefault();

      if(currentId){
         dispatch(updatePost(currentId, postData));
      }
      else{
         dispatch(createPost(postData));  
      }
      clear();
    }

    const clear = () =>{
      setCurrentId(null);
      setPostData({
         title : '',
         message : '',
         creator : '',
         tags : '',
         selectedFile : ''
     })
    }

    return(
        <Paper className={classes.paper}>
           <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}  >
             <Typography variant="h6" align="center" > {currentId ? "Edit" : "Create"} your Memory ♡ </Typography>
             <TextField 
                name="creator" 
                variant="outlined" 
                label="Creator" 
                fullWidth 
                value={postData.creator} 
                onChange={ (e)=> setPostData({ ...postData, creator : e.target.value })}
             />

             <TextField 
                name="title" 
                variant="outlined" 
                label="Title" 
                fullWidth 
                value={postData.title} 
                onChange={ (e)=> setPostData({ ...postData, title : e.target.value })}
             />

             <TextField 
                name = "message"
                label = "Message"
                variant="outlined"
                fullWidth
                value={postData.message}
                onChange={ (e)=> setPostData({ ...postData, message : e.target.value })}
             />

             <TextField 
                name="tags" 
                variant="outlined" 
                label="Tags" 
                fullWidth 
                value={postData.tags} 
                onChange={ (e)=> setPostData({ ...postData, tags : e.target.value.split(',') })}                
             />

             <div className={classes.fileInput}>
                <FileBase 
                    type = "file"
                    multiple = {false}
                    onDone = { ({base64}) => setPostData ({ ...postData, selectedFile: base64 })}
                />                    
             </div>   

             <Button className={classes.buttonSubmit} 
                     size="large" 
                     fullWidth 
                     color="primary" 
                     variant="contained"
                     type="submit"
                     style={{marginBottom: 10}}
              >
                Submit
             </Button>
             <Button size="small"
                     color="secondary"
                     onClick={clear}
                     variant="contained"
                     fullWidth
             >
              Clear    
             </Button>
           </form>
        </Paper>
    )
}

export default Form;