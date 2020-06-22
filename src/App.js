import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './App.css';
import ArtPiece from './ArtPiece';

class App extends Component {
  constructor() {
    super();
    this.state = {
      artwork: []
    }
  }

  componentDidMount() {

    axios({
      url: 'https://www.rijksmuseum.nl/api/en/collection',
      method: 'GET',
      responseType: 'json',
      params: {
        key: 'BTKb4kKl',
        format: 'json'
      }
    }).then((response) => {
      this.setState({
        artwork: response.data.artObjects
      })
    })

  }

  render() {

    return (
      <div className="App">

        <h1>Art!Art!Art!</h1>

        {this.state.artwork.map((item) => {
          return (
            
              <ArtPiece 
                imageTitle={item.title}
                imageSource={item.webImage.url}
                imageInfo={item.longTitle}
                imageId={item.id}
              />
            
          )
        })}



      </div>
    )

  }
}

export default App;
