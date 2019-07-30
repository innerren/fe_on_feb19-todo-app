import React from "react";
import "./App.css";
import TodoItems from "./TodoItems";
import Filters from "./Filters";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // members of item structure
      // item: {
      //   id: 0,
      //   title: "",
      //   completed: false,
      // }
      items: [],

      filter: null,
      displayStyle: { display: "block" },
      isSelect: ["all", "active", "completed"],
    };
  }

  completedItems = () => {
    return this.state.items.filter(item => item.completed).length;
  };

  leftIems = () => {
    return this.state.items.length - this.completedItems();
  };

  addTask = e => {
    const item = {};
    item.title = this.refs.textInput.value;
    e.preventDefault();
    item.completed = false;
    this.refs.textInput.value = "";
    this.setState(prevState => {
      item.id
        = prevState.items.length === 0
          ? 0
          : prevState.items[prevState.items.length - 1].id + 1;
      return { items: [...prevState.items, item] };
    });
  };

  removeTask = id => {
    this.setState(prevState => {
      return { items: prevState.items.filter(item => item.id !== id) };
    });
  };

  isComplete = id => {
    this.setState(prevState => {
      return {
        items: prevState.items.map(item => {
          if (item.id === id) {
            const tmp = { ...item };
            tmp.completed = !item.completed;
            return tmp;
          }
          return item;
        }),
      };
    });
  };

  setFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  clearComplete = () => {
    this.setState(prevState => {
      return { items: prevState.items.filter(item => !item.completed) };
    });
  };

  render() {
    this.setState(prevState => {
      if (
        prevState.items.length === 0
        && prevState.displayStyle.display === "block"
      ) {
        return { displayStyle: { display: "none" } };
      } else if (
        prevState.items.length !== 0
        && prevState.displayStyle.display === "none"
      ) {
        return { displayStyle: { display: "block" } };
      }
    });

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos App</h1>
          <form onSubmit={this.addTask}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus=""
              autoComplete="off"
              type="text"
              ref="textInput"
            />
          </form>
        </header>
        <section className="main" style={this.state.displayStyle}>
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoItems
            items={this.state.items}
            toggleIsComplete={this.isComplete}
            removeTask={this.removeTask}
            filter={this.state.filter}
            completingItems={this.completingItems}
          />
        </section>
        <footer className="footer" style={this.state.displayStyle}>
          <span className="todo-count">
            <strong>{this.leftIems()}</strong> items left
          </span>

          <Filters
            isSelect={this.state.isSelect}
            setFilter={this.setFilter}
            filter={this.state.filter}
          />

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
