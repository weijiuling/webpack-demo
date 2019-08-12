import React from "react";

interface HelloProps {
  name: string;
}
class Bar extends React.Component {
  constructor(public props: HelloProps) {
    super(props);
  }

  render() {
    const { name } = this.props;
    return <p>Hello {name}</p>;
  }
}

export default Bar;
