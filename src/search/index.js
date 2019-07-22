"use strict";

import React from "react";
import ReactDOM from "react-dom";
import "../../common/index.js";
import "./search.less";
import logo from "../images/flower.jpeg";
import Bar from "./Bar.js";
import axios from "axios";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      Text: null
    };
  }

  componentDidMount() {
    // window.addEventListener("popstate", function(event) {
    //   console.log("回退");
    //   // 点击回退时再向历史记录插入一条，以便阻止下一次点击回退
    //   history.pushState(
    //     null,
    //     null,
    //     document.URL.split("?")[0] + "?rand=" + Math.random()
    //   );
    // });
  }

  loadComponent = () => {
    // import("./test.js").then(Text => {
    //   axios
    //     .get(
    //       "/2018/10/19/16689e2bb057f60d?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
    //     )
    //     .then(res => {
    //       console.log(res);
    //     });
    //   this.setState({
    //     Text: Text.default
    //   });
    // });
    history.pushState({ title: "twitter" }, "twitter", "/index.html");
    // history.back();
    // history.forward();
    // history.pushState(
    //   null,
    //   null,
    //   document.URL.split("?")[0] + "?rand=" + Math.random()
    // );
  };
  render() {
    const { Text } = this.state;
    return (
      <div className="search">
        <div className="box">
          <span>dal</span>
          <span>你说实话实说</span>
        </div>
        <Bar />
        {Text ? <Text /> : null}
        <img src={logo} width="100" height="100" onClick={this.loadComponent} />
        <a href="/index.html">
          <img
            src={require("../images/flower.jpeg")}
            width="100"
            height="100"
            alt=""
          />
        </a>
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
