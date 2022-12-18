import React from "react";
import "./App.scss";
import "./Content.scss";
var background = require("./data/bg-img2.gif");

const styleHeader = {
    color: "white", 
    fontSize: "calc(6px + 2vmin)",
    textAlign: "center" as const,
    webkitTextStroke: ".3px black",
}

export default class Content extends React.Component {
    constructor(props: never) {
        super(props);
    }

    render() {
        return (
            <>
                <section className="App" style={{backgroundImage: `url(${background})`}}>
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime nostrum molestiae quidem, quam itaque minus nihil esse adipisci repellendus id autem quaerat sint accusamus suscipit expedita reiciendis repudiandae nemo molestias?
                    </p>
                </section>

                <section className="section">
                    <div className="title-text heading">
                        <h1>Programming Proficiency</h1>
                    </div>
                    <div className="skills">
                        <ul>
                        <li>teste
                        </li>
                        <li>teste
                        </li>
                        <li>teste
                        </li>
                        <li>teste
                        </li>
                        <li>teste
                        </li>
                        <li>teste
                        </li>
                        <li>teste
                        </li>
                        <li>teste
                        </li>
                        <li>teste
                        </li>
                        <li>teste
                        </li>
                        <li>teste
                        </li>
                        </ul>
                    </div>
                </section>
            </>
        )
    }
}
