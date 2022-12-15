import React from "react";
import "./App.scss";
var background = require("./data/bg-img2.gif");

const styleHeader = {
    color: "white", 
    fontSize: "calc(6px + 2vmin)",
    textAlign: "center" as const,
    webkitTextStroke: ".3px black",
}

const styleTitleSection = {
    
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

                <section>
                    <div className="title">
                        <h1>Content</h1>
                    </div>
                </section>

            </>
        )
    }
}