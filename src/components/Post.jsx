import React from 'react'
import {Button, Card} from 'react-bootstrap'

const Post = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="Post" />
  <Card.Body>
    <Card.Title>Blog Post Title</Card.Title>
    <Card.Text>
      Blog Post content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  )
}

export default Post