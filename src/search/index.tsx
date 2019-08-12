"use strict";

import React from "react";
import ReactDOM from "react-dom";
import "../../common/index.js";
import "./search.less";
import Bar from "./Bar";
import Apple from "./Apple";
import axios from "axios";

class Search extends React.Component {
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
  test = (te: any) => {
    console.log(te);
    axios
      .get("/ib/ka/category/tree4Organize?organizeId=72&shopId=1006202")
      .then(res => {
        console.log(res);
      });
    return te;
  };

  loadComponent = () => {
    // import("./test.js").then(Text => {

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
    return (
      <div className="search">
        <div className="box">
          <span>你说实话实说????</span>
        </div>
        <Bar name="渣渣辉" />
        <Apple />
        <a>
          <img
            src={require("../images/flower.jpeg")}
            width="100"
            height="100"
            alt=""
          />
        </a>
        <a onClick={this.test}>test</a>
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));

if ((module as any).hot) {
  (module as any).hot.accept();
}
