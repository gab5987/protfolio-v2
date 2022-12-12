import React from 'react';
import './App.scss';
import "@fontsource/press-start-2p";
var background = require("./data/bg-img.gif");


const delay = (ms: any) => new Promise(res => setTimeout(res, ms));

export default class App extends React.Component
<{}, {counter: number, message: string,}>
{
  constructor(props: never) {
    super(props);
    this.state = {
      counter: 5,
      message: "",
    }
    this.continueComponent = this.continueComponent.bind(this);
  }

  componentDidMount(): void {
    this.continueComponent()
  }

  continueComponent = async () => {
    await delay(2000);
    this.updateMessage()
    await this.reduceCounter()
  }

  updateMessage = () => this.setState({ message: `this message will self destruct in ${this.state.counter}\"`});
  redirect = () => window.location.replace("/content")

  reduceCounter = async () => {
    await delay(1000);
    this.setState({ counter: this.state.counter - 1});
    this.updateMessage();
    this.state.counter > 0 ? this.reduceCounter() : this.redirect();
  }

  render() {
    return (
      <div className="App" style={{backgroundImage: `url(${background})`}}>
        <div className='App-header nes-container is-dark with-title is-centered"'>
          <p className="title">Heya!!</p>
          <p>Thou hast had a good night's sleep, I hope.</p>
          <small> { this.state.message } </small>
        </div>
      </div>
    );
  }
}
