import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

const CardItem = () => {
  return (
    <>
      <Card className="right-side-card-item m-2">
        <Card.Header>
          About Commuinty
        </Card.Header>
        <Card.Body>
          <div>
            welcome to cyber security
          </div>
          <p>
            <b>251k</b> members
          </p>
          
        </Card.Body>
        <Card.Footer>
          <div>
            created at: 1996
          </div>
        </Card.Footer>
      </Card>
    </>
  )
}

export default CardItem;