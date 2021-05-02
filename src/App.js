import React from 'react'
import axios from 'axios'
import './App.css';


class App extends React.Component  {
  state={
    data: ""
  }

  componentDidMount() {
    this.fetchdata()
  }

  fetchdata() {
    axios.get('http://localhost:3000/api/reddit_channel').then((res) => {
      this.setState({data: res})
    })
  }

  render() {
    return (
      <div className="App">
        {JSON.stringify(this.state.data)}
      </div>
    );
  }
}

export default App;
