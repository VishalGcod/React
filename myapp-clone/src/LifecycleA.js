import React, { Component } from "react";
import { LifecycleB } from "./LifecycleB";

export class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "vishal",
    };
    console.log("lifecycle A constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycle A getderivedstatefromprops");
    return null;
  }

  componentDidMount() {
    console.log("lifecycle A component did mounted");
  }

  shouldComponentUpdate() {
    console.log("lifecycle A shouldcomponentupdate method");
    return true;
  }

  getSnapshotBeforeUpdate(preProps, prevState) {
    console.log("lifecycle A getsnapshotbeforeupdate method");
    return null;
  }

  componentDidUpdate() {
    console.log("lifecycle A componentdidupdate method");
  }

  changestate = () => {
    this.setState({ name: "ganesan" });
  };

  render() {
    console.log("lifecycle A rendermethod");
    return (
      <div>
        <h1>LifecycleA</h1>
        <button onClick={this.changestate}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}
