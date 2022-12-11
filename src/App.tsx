import React from 'react';
import './App.scss';
import "@fontsource/press-start-2p";
var background = require("./data/bg-img.gif");

export default class App extends React.Component
<{}, {}>
{
  constructor(props: never) {
    super(props);
  }

  render() {
    return (
      <div className="App" >
        <div className='App-header' style={{backgroundImage: `url(${background})`}}>
          huguyg
        </div>
      </div>
    )

  }
}
