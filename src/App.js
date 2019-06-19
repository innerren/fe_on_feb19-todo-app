import React from "react";
import "./App.css";
import TodoItems from "./todoitems";

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
      viewedItems: 0,
      filter: null,
      displayStyle: { display: "block" },
      isSelect: {
        all: "selected",
        active: "",
        completed: ""
      }
    };
  }

  countingItems = count => {
    this.setState({
      viewedItems: count
    });
  };

  addTask = event => {
    if (event.key === "Enter") {
      let task = event.target.value;
      event.target.value = "";
      this.setState({ displayStyle: { display: "block" } });
      this.setState(prevState => {
        const tmp = { ...prevState.textLines };
        tmp[task] = false;
        return { textLines: tmp };
      });
    }
  };

  changeDisplay = isView => {
    const newDisplay = isView ? { display: "none" } : { display: "block" };
    console.log(newDisplay);
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
  clearComplete = () => {
    this.setState(prevState => {
      const tmp = { ...prevState.textLines };
      for (let key in tmp) {
        if (tmp[key]) {
          delete tmp[key];
        }
      }
      return { textLines: tmp };
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
            autocomplete="off"
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
              countingItems={this.countingItems}
              viewedItems={this.state.viewedItems}
            />
          </ul>
        </section>
        <footer className="footer" style={this.state.displayStyle}>
          <span className="todo-count">
            <strong>{this.state.viewedItems}</strong> items left
          </span>
          <ul className="filters">
            <li>
              <a
                href="#/"
                className={this.state.isSelect.all}
                onClick={() => {
                  this.setState({
                    filter: null,
                    isSelect: {
                      all: "selected",
                      active: "",
                      completed: ""
                    }
                  });
                }}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#/active"
                className={this.state.isSelect.active}
                onClick={() => {
                  this.setState({
                    filter: "active",
                    isSelect: {
                      all: "",
                      active: "selected",
                      completed: ""
                    }
                  });
                }}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#/completed"
                className={this.state.isSelect.completed}
                onClick={() => {
                  this.setState({
                    filter: "completed",
                    isSelect: {
                      all: "",
                      active: "",
                      completed: "selected"
                    }
                  });
                }}
              >
                Completed
              </a>
            </li>
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
