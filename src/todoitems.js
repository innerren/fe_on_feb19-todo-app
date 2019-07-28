import React from "react";

class TodoItems extends React.Component {
  render() {
    const ids = Object.keys({ ...this.props.textLines });
    const filtredTasks =
      this.props.filter === "completed"
        ? ids.filter(key => this.props.textLines[key])
        : this.props.filter === "active"
        ? ids.filter(key => !this.props.textLines[key])
        : [...ids];

    return filtredTasks.map(textLine => (
      <li className="" id={textLine}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.textLines[textLine]}
            onClick={() => this.props.toggleIsComplete(textLine)}
            onChange={() => this.props.completingItems()}
          />
          <label>{textLine}</label>

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
