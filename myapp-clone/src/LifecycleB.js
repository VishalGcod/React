import React, { Component } from "react";

export class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "vishal",
    };
    console.log('lifecycle B constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycle B getderivedstatefromprops");
    return null;
  }

  componentDidMount(){
    console.log('lifecycle B component did mounted');
  }

  shouldComponentUpdate(){
    console.log('lifecycle B shouldcomponentupdate method');
    return true
  }

  getSnapshotBeforeUpdate(preProps,prevState){
    console.log('lifecycle B getsnapshotbeforeupdate method');
    return null
  }

  componentDidUpdate(){
    console.log('lifecycle B componentdidupdate method');
  }


  render() {
    console.log('lifecycle B rendermethod')
    return (
      <div>
        <h1>LifecycleB</h1>
      </div>
    );
  }
}