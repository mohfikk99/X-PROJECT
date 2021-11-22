import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Profile() {
    return (
        <>
            <Card className="text-center container mt-5" style={{ width: '28rem' }}>
  <Card.Header>Featured</Card.Header>
  <img alt="" src="default.jpg" width="250" height="250" className="img-profile profile  mt-5 mb-5"/>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
        </>
    )
}
