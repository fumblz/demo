import React, { Component } from "react";
import Banner from "../Components/Banner";

export default class Home extends Component {
  render() {
    return (
      <div className="container my-3">
        <Banner title="Hello, World" />
      </div>
    );
  }
}
