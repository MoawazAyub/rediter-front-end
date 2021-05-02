import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import InfoCards from '../shared/infoCards/infoCards'
import Listing from '../shared/listing/listing'

const ContentSection = () => {
  return (
    <>
      <div className="content-section">
        <Container>
          <Row>
            <Col md={8} className="mt-2">
              <div className="list-item-area">
                <Listing/>
              </div>
            </Col>
            <Col md={4} className="mt-2">
              <InfoCards/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ContentSection;