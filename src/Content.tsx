import React from "react";
import "./App.scss";
import "./Content.scss";
import { sharedData } from "./data/content.js";
let background = require("./data/bg-img2.gif");
let background2 = require("./data/bg-img3.gif");

const styleHeader = {
  color: "white",
  fontSize: "calc(6px + 2vmin)",
  textAlign: "center" as const,
  webkitTextStroke: ".3px black",
};

export default class Content extends React.Component<{}, { windowWidth: any }> {
  constructor(props: never) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount(): void {
    window.addEventListener("resize", () =>
      this.setState({ windowWidth: window.innerWidth })
    );
  }

  render() {
    return (
      <>
        <section
          className="App"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div style={styleHeader}>
            <h1>Gabriel Novalski</h1> <br />
            <h4>Software developer</h4>
          </div>
        </section>

        <section className="section diff-bg">
          <div className="title-text heading">
            <h1>{sharedData.about.title}</h1>
          </div>
          <p className="paragraph"> {sharedData.about.message} </p>
        </section>

        <section className="section">
          <div className="title-text heading">
            <h1> {sharedData.skills.title} </h1>
          </div>
          <div className="skills">
            <ul>
              {sharedData.skills.itens.map((item: any) => {
                return <li style={{ color: item.color }}>{item.name}</li>;
              })}
            </ul>
          </div>
        </section>

        <section className="section diff-bg">
          <div className="title-text heading">
            <h1> {sharedData.education.title} </h1>
          </div>

          <div className="education-timeline">
            {sharedData.education.itens.map((item: any) => {
              return (
                <div>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                  <h4>
                    {item.date.start} -{`>`} {item.date.end}
                  </h4>
                </div>
              );
            })}
          </div>
        </section>

        <section className="section">
          <div className="title-text heading">
            <h1> {sharedData.projects.title} </h1>
          </div>

          {sharedData.projects.itens.map((item: any) => {
            return (
              <div
                className={
                  this.state.windowWidth > 900
                    ? "projects container"
                    : "container"
                }
              >
                <div className="cc-image">
                  {this.state.windowWidth > 900 && (
                    <img src={item.image} alt="project image" />
                  )}
                </div>
                <div className="cc-text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.link && (
                    <div className="link-holder">
                      <a onClick={() => window.open(`${item.link}`, "_blank")}>
                        view more
                      </a>
                    </div>
                  )}
                </div>
                {this.state.windowWidth < 900 && (
                  <img src={item.image} alt="project image" />
                )}
              </div>
            );
          })}
        </section>

        <section
          className="section footer"
          style={{ backgroundImage: `url(${background2})` }}
        >
          <div className="title-text heading" style={{ color: "#fff" }}>
            <h1>Get in Touch</h1>
          </div>
          <div className="container" style={{ background: "#dedede" }}>
            <p className="paragraph">
              Did you like my profile? Want to get to know me a little more?
              <br />
              Don't hesitate to send me a message!
            </p>

            {sharedData.contact.social.map((item: any) => {
              return (
                <a
                  style={{ padding: "10px" }}
                  onClick={() => window.open(`${item.link}`, "_blank")}
                >
                  <i className={`nes-icon ${item.name} is-medium`}></i>
                </a>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}
