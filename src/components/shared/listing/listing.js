import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import ListItem from '../listItem/listItem'

const Listing = () => {
  const listItem = () => {
    return [<ListItem/>, <ListItem/>, <ListItem/>, <ListItem/>, <ListItem/>, <ListItem/>]
  }
  
  return (
    <>
      {listItem()}
    </>
  )
}

export default Listing;