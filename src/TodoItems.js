import React from "react";

class TodoItems extends React.Component {
  list = tasks => {
    return tasks.map(item => (
      <li className="" key={item.id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={item.completed}
            onChange={() => this.props.toggleIsComplete(item.id)}
          />
          <label onClick={() => this.props.toggleIsComplete(item.id)}>
            {item.title}
          </label>

          <button
            className="destroy"
            onClick={() => this.props.removeTask(item.id)}
          />
        </div>
      </li>
    ));
  };

  render() {
    const filtr = this.props.filter;
    const items = this.props.items;
    const filtredTasks
      = filtr === "completed"
        ? items.filter(item => item.completed)
        : filtr === "active"
        ? items.filter(item => !item.completed)
        : [...items];

    return <ul className="todo-list">{this.list(filtredTasks)}</ul>;
  }
}

export default TodoItems;
