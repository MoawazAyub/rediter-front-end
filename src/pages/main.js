import React from 'react'
import ContentSection from '../components/contentSection/contentSection'
import Header from '../components/header/header'
import Navbar from '../components/navbar/navbar'

class Main extends React.Component  {

  render() {
    return (
      <>
        <Navbar/>
        <Header/>
        <ContentSection/>
      </>
    );
  }
}

export default Main;
