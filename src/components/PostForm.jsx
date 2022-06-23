import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

const PostForm = (props) => {
const [postNickName, setPostNickName] = useState('');
const [post, setpost] = useState('');

const addPost = (e) =>{
    e.preventDefault();
  let post = {
"id" : 6,
 "postNickName" : postNickName,
"post" : post
 }
console.log(post);
props.submitHandler(post);
}
return (
   <Form onSubmit = {addPost}>
   <Form.Group className="mb-3" controlId="formPostNickName">
   <Form.Label>Post Nickname</Form.Label>
   <Form.Control type="text" placeholder="Enter your Nickname" value={postNickName}
   onChange ={event=>setPostNickName(event.target.value)}/>
  
   </Form.Group>

   <Form.Group className="mb-3" controlId="formpost">
   <Form.Label>Post</Form.Label>
   <Form.Control type="text" placeholder="Type your post" value={post}
   onChange ={event=>setpost(event.target.value)}/>
  </Form.Group>
   <Button variant="primary" type="submit">
   Submit
  </Button>
  </Form>
   )
  }
  
  export default PostForm