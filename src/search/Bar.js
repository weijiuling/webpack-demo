import React from "react";

class Bar extends React.Component {
  state = { search: "" };

  handleChange = event => {
    /**
     * 这是“防抖”函数的简单实现，它会以队列的方式在 250 ms 内调用
     * 表达式并取消所有挂起的队列表达式。以这种方式我们可以在用户停止输
     * 入时延迟 250 ms 来调用表达式。
     */
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        search: event.target.value
      });
    }, 250);
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        {this.state.search ? <p>Search for: {this.state.search}</p> : null}
      </div>
    );
  }
}

export default Bar;
