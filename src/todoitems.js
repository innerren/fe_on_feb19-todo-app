import React from "react";

class TodoItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const ids = Object.keys({ ...this.props.textLines });
    const filtredTasks =
      this.props.filter === "completed"
        ? ids.filter(key => this.props.textLines[key])
        : this.props.filter === "active"
        ? ids.filter(key => !this.props.textLines[key])
        : [...ids];
    if (this.props.viewedItems !== filtredTasks.length) {
      this.props.countingItems(filtredTasks.length);
    }

    return filtredTasks.map(textLine => (
      <li className="">
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.textLines[textLine]}
            onClick={() => this.props.toggleIsComplete(textLine)}
          />
          <label>{textLine}</label>
          {console.log(this.props.textLines)}
          {console.log(this.props.filter)}
          <button
            className="destroy"
            onClick={() => this.props.removeTask(textLine)}
          />
        </div>
      </li>
    ));
  }
}

export default TodoItems;
