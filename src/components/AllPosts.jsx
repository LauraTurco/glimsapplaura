import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import Post from './Post'
import PostForm from './PostForm'

const AllPosts = () => {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    getAllPosts()
},[])

  function getAllPosts(){
    axios.get('http://localhost:8080/departments')
    .then(response=>{
       setPosts(response.data)
    })
    .catch(error=>{
        console.log(error)
    })
}

    let postList = posts.map(post =>
      <div key={post.post_id}>
      <Post post = {post}/>
  </div>)

const addPost = (post)=>{
    posts.push(post);
    console.log(posts);
}

  return (
    <>
    <h1>AllPosts: </h1>
    <Container>
    <Row>
      <Col>{postList}</Col>
      <Col><PostForm submitHandler = {addPost} /></Col>
    </Row>
</Container>
    </>
  )
}

export default AllPosts
