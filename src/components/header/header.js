import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <div className="top-header" />
      <Container className="bottom-header">
        <div className="title-area">
          <div className="channel-image">
            <img src="https://styles.redditmedia.com/t5_2u559/styles/communityIcon_x0d8uxqbsf411.png?width=256&s=840eac1453ccd2fb7592e113423ce57b17cbd976"
              alt="no image"/>
          </div>
          <div className="channel-text-title">
            <div className="main-title">
              <h2>
                Cyber Security
              </h2>
            </div>
            <div className="sub-title">/r/cyber-security</div>
          </div>
          <div className="join-btn ml-3">
            <Button variant="danger" className="basic-btns">Join</Button>   
          </div>
        </div>
      </Container>
    </>
  )
}

export default Header;