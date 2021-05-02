import React from 'react'
import CardItem from '../cardItem/cardItem'

const InfoCards = () => {
  const listItem = () => {
    return [<CardItem/>, <CardItem/>, <CardItem/>]
  }
  
  return (
    <>
      {listItem()}
    </>
  )
}

export default InfoCards;