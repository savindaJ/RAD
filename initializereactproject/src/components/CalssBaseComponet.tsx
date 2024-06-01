import { log } from "console";
import React, { Component } from "react";

interface Props {
  name: string;
}

export default class CalssBaseComponet extends Component<Props> {
  data = "data";

  constructor(props: Props) {
    super(props);
    console.log("CalssBaseComponet constructor");
  }

  componentDidMount(): void {
    this.data = this.props.name;
    this.fetchData(this.data);
    console.log("CalssBaseComponet componentDidMount");
  }

  componentWillUnmount(): void {
    console.log("CalssBaseComponet componentWillUnmount");
  }

  async fetchData(params: any) {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/10");
      const data = await response.json();
      console.log(data);
      console.log("fetchData");
    } catch (error) {
      console.log("fetchData error");
    }
  }

  render() {
    return <div>CalssBaseComponet</div>;
  }
}
