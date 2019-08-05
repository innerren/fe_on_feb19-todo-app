import React from "react";

class Header extends React.Component {
  state = {
    value: "",
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const addTask = this.props.addTask;
    return (
      <header className="header">
        <h1>todos App</h1>
        <form
          onSubmit={e => {
            addTask(e, this.state.value);
            this.setState({ value: "" });
          }}
        >
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus={true}
            value={this.state.value}
            autoComplete="off"
            type="text"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Header;
