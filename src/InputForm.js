import React from "react";
import "./inputForm.css";

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
      <div className="form">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="form__inner">
              <div className="form__username">
                <label>
                  Username:
                  <input
                    value={this.state.username}
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="form__password">
                <label>
                  Password:
                  <input
                    value={this.state.password}
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="form__product">
                <label>
                  Select a product
                  <select
                    name="selectedProduct"
                    value={this.state.selectedProduct}
                    onChange={this.handleChange}
                    type="radio"
                  >
                    <option value="--">--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </label>
              </div>
              <div className="form__bottom">
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
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default InputForm;
