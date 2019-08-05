import React from "react";
import "./App.css";
import TodoItems from "./TodoItems";
import Footer from "./Footer";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      filter: null,
      displayed: false,
      filters: ["all", "active", "completed"],
    };
  }

  completedItems = () => {
    return this.state.items.filter(item => item.completed).length;
  };

  leftIems = () => {
    return this.state.items.length - this.completedItems();
  };

  addTask = (e, value) => {
    const item = {};
    item.title = value;
    e.preventDefault();
    item.completed = false;
    item.editable = false;

    this.setState(prevState => {
      item.id
        = prevState.items.length === 0
          ? 0
          : prevState.items[prevState.items.length - 1].id + 1;
      return { items: [...prevState.items, item], displayed: true };
    });
  };

  setEditable = id => {
    this.setState(prevState => {
      return {
        items: prevState.items.map(item =>
          item.id === id ? { ...item, editable: true } : item
        ),
      };
    });
  };

  escapeEdit = (e, title, id) => {
    e.target.innerText = title;
    this.setState(prevState => {
      return {
        items: prevState.items.map(item =>
          item.id === id ? { ...item, editable: false } : item
        ),
      };
    });
  };

  editTask = (e, id, title) => {
    if (e.keyCode === 13) {
      const newTitle = e.target.innerText;
      this.setState(prevState => {
        return {
          items: prevState.items.map(item =>
            item.id === id
              ? { ...item, title: newTitle, editable: false }
              : item
          ),
        };
      });
    }
    if (e.keyCode === 27) {
      this.escapeEdit(e, title, id);
    }
  };

  removeTask = id => {
    this.setState(prevState => {
      const tmp = prevState.items.filter(item => item.id !== id);

      return { items: tmp, displayed: !(tmp.length === 0) };
    });
  };

  isComplete = id => {
    this.setState(prevState => {
      return {
        items: prevState.items.map(item =>
          item.id === id ? { ...item, completed: !item.completed } : item
        ),
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
    return (
      <section className="todoapp">
        <Header addTask={this.addTask} />
        <section className="main" style={this.state.displayStyle}>
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoItems
            items={this.state.items}
            toggleIsComplete={this.isComplete}
            removeTask={this.removeTask}
            filter={this.state.filter}
            completingItems={this.completingItems}
            editTask={this.editTask}
            escapeEdit={this.escapeEdit}
            setEditable={this.setEditable}
          />
        </section>
        {this.state.displayed ? (
          <Footer
            leftIems={this.leftIems}
            setFilter={this.setFilter}
            clearComplete={this.clearComplete}
            filters={this.state.filters}
            filter={this.state.filter}
          />
        ) : null}
      </section>
    );
  }
}

export default App;
