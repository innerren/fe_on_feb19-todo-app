import React from "react";
import "./App.css";
import TodoItems from "./todoitems";
import Filters from "./filters";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textLines: {
        hello: false,
        bye: false,
        "another task": false,
        "last task": false
      },
      completedItems: 0,
      filter: null,
      displayStyle: { display: "block" },
      isSelect: ["all", "active", "completed"]
    };
  }

  completingItems = () => {
    this.setState(prevState => {
      return { completedItems: prevState.completedItems + 1 };
    });
  };

  leftIems = () => {
    return Object.keys(this.state.textLines).length - this.state.completedItems;
  };

  addTask = event => {
    if (event.key === "Enter") {
      let task = event.target.value;
      event.target.value = "";
      this.setState(prevState => {
        const tmp = { ...prevState.textLines };
        tmp[task] = false;
        return { textLines: tmp, displayStyle: { display: "block" } };
      });
    }
  };

  changeDisplay = isView => {
    const newDisplay = isView ? { display: "none" } : { display: "block" };
    this.setState({ displayStyle: newDisplay });
  };

  removeTask = key => {
    this.setState(prevState => {
      const tmp = { ...prevState.textLines };
      delete tmp[key];
      return { textLines: tmp };
    });
  };

  isComplete = key => {
    this.setState(prevState => {
      const tmp = { ...prevState.textLines };
      tmp[key] = !prevState.textLines[key];
      return { textLines: tmp };
    });
  };

  setFilter = newFilter => {
    this.setState({
      filter: newFilter
    });
  };

  clearComplete = () => {
    this.setState(prevState => {
      const tmp = { ...prevState.textLines };
      for (let key in tmp) {
        if (tmp[key]) {
          delete tmp[key];
        }
      }
      return { textLines: tmp, completedItems: 0 };
    });
  };

  render() {
    if (this.state.displayStyle.display === "block") {
      if (Object.keys(this.state.textLines).length === 0) {
        this.setState({ displayStyle: { display: "none" } });
      }
    }

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos App</h1>

          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus=""
            autoComplete="off"
            onKeyPress={this.addTask}
          />
        </header>
        <section className="main" style={this.state.displayStyle}>
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            <TodoItems
              textLines={this.state.textLines}
              toggleIsComplete={this.isComplete}
              removeTask={this.removeTask}
              filter={this.state.filter}
              completingItems={this.completingItems}
            />
          </ul>
        </section>
        <footer className="footer" style={this.state.displayStyle}>
          <span className="todo-count">
            <strong>{this.leftIems()}</strong> items left
          </span>
          <ul className="filters">
            <Filters
              isSelect={this.state.isSelect}
              setFilter={this.setFilter}
              filter={this.state.filter}
            />
          </ul>
          <button
            className="clear-completed"
            style={this.state.displayStyle}
            onClick={() => {
              this.clearComplete();
            }}
          >
            clear-completed
          </button>
        </footer>
      </section>
    );
  }
}

export default App;
