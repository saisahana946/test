import React, { Component } from "react";
import "./nav.css";
import Data from "./data";
export default class nav extends Component {
  constructor(props) {
    super();
    this.state = {
      newname: "mahesh",
    };
  }

  handleClick(e) {
    this.setState({
      newname: e,
    });
  }
  render() {
    return (
      <>
        <center>
          <ul>
            <li value="Home" onClick={() => this.handleClick("hom")}>
              Home
            </li>
            <li value="News" onClick={() => this.handleClick("News")}>
              News
            </li>
            <li value="Contact" onClick={() => this.handleClick("Contact")}>
              Contact
            </li>
            <li value="About" onClick={() => this.handleClick("About")}>
              About
            </li>
          </ul>
        </center>
        <Data name={this.state.newname} />
      </>
    );
  }
}
