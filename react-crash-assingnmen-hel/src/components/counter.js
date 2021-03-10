import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   imageUrl: "https://picsum.photos/200",
  //   tags: []
  // };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  //   // console.log(this.state.count);
  // };

  render() {
    //console.log("prop", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          // onClick={this.handleIncrement}
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classess = "badge m-2 badge-";
    classess += this.props.counter.value === 0 ? "warning" : "primary";
    return classess;
  }

  formateCount() {
    const { value: countNum } = this.props.counter;
    const x = <h5>Zero</h5>;
    return countNum === 0 ? x : countNum;
  }
}

export default Counter;
