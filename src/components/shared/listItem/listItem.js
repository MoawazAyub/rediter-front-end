import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

const ListItem = () => {
  return (
    <>
      <Card className="feed-list-item m-2">
        <Row className="m-0 p-0">
          <Col md={1} className="p-0 m-0 left-section">
            <div className="text-center">
              &#x21e7;
            </div>
            <div className="text-center">
              47
            </div>
            <div className="text-center">
              &#x21e9;
            </div>
          </Col>
          <Col md={11} className="right-section">
            <div>
              <div className="list-item-posted-section">
                posted by: Moawaz
              </div>
              <h5>
                Most Awesome person
              </h5>
              <p>
                some random content
              </p>
              
            </div>
            <div className="list-item-footer-section d-flex">
              <div>Comments</div>
              <div>Share</div>
              <div>Save</div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default ListItem;