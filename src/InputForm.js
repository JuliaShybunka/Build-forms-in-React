import React from "react";

class InputForm extends React.Component {
  state = {
    username: "",
    password: "",
    selectedProduct: "",
    check: ""
  };

  handleChange = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  handleSelect = event => {
    this.setState({ selectedProduct: event.target.value });
  };

  handleCheck = event => {
    this.setState({ check: event.target.checked });
  };

  handleSubmit = event => {
    const state = this.state;
    alert(
      "Log in form, " +
        state.username +
        ", " +
        state.password +
        ", " +
        state.selectedProduct +
        ", " +
        state.check +
        "."
    );
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              value={this.state.username}
              type="text"
              name="username"
              onChange={this.handleChange}
            />
            <p>{this.state.username}</p>
          </label>
          <label>
            Password:
            <input
              value={this.state.password}
              type="password"
              name="password"
              onChange={this.handleChange}
            />
            <p>{this.state.password}</p>
          </label>
          <label>
            Select a product
            <select
              name="selectedProduct"
              value={this.state.selectedProduct}
              onChange={this.handleSelect}
            >
              <option value="--">--</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <p> {this.state.selectedProduct}</p>
          </label>
          <label>
            <input
              type="checkbox"
              value={this.state.check}
              name="checkbox"
              onChange={this.handleCheck}
            />
            Keep me logged in
          </label>

          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}
export default InputForm;
