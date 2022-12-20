import React from "react";
import "./App.scss";
import "./Content.scss";
import {sharedData} from "./data/content.js";
var background = require("./data/bg-img2.gif");

const styleHeader = {
  color: "white",
  fontSize: "calc(6px + 2vmin)",
  textAlign: "center" as const,
  webkitTextStroke: ".3px black",
};

export default class Content extends React.Component<
{}, { windowWidth: any }> {
  constructor(props: never) {
    super(props);
    this.state = {
        windowWidth: window.innerWidth,
    };
  }

  componentDidMount(): void {
    window.addEventListener("resize", () => this.setState({ windowWidth: window.innerWidth }));
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
            <h1>About</h1>
          </div>
          <p className="paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            nostrum molestiae quidem, quam itaque minus nihil esse adipisci
            repellendus id autem quaerat sint accusamus suscipit expedita
            reiciendis repudiandae nemo molestias?
          </p>
        </section>

        <section className="section">
          <div className="title-text heading">
            <h1>Programming Proficiency</h1>
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
            <h1>Education</h1>
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
                <h1>Projects</h1>
            </div>

            {sharedData.projects.itens.map((item: any) => {
                return(
                    <div className="projects-container">
                        <div className="cc-image">
                            { this.state.windowWidth > 900 && <img src={item.image} alt="project image"/>}
                        </div>
                        <div className="cc-text">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            {item.link && <div className="link-holder"><a onClick={() => window.open(`${item.link}`, '_blank')} >view more</a></div>}
                        </div>
                    </div>
                );
            })}
        </section>

        <section className="footer">
        </section>
      </>
    );
  }
}
