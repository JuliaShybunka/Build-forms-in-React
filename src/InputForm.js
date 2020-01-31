import React from "react";
import "./inputForm.css";

class InputForm extends React.Component {
  state = {
    username: "",
    password: "",
    selectedProduct: "",
    check: "",
    hidden: true
  };

  handleChange = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  handleCheck = event => {
    this.setState({ check: event.target.checked });
  };
  toggleButton = () => {
    this.setState({ hidden: !this.state.hidden });
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
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <div className="form__inner">
              <div className="form__username">
                <label>
                  Username
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
                  Password
                  <input
                    value={this.state.password}
                    type={this.state.hidden ? "password" : "text"}
                    name="password"
                    onChange={this.handleChange}
                  />
                  <button
                    className={
                      "form__toggleButton" +
                      (!this.state.hidden ? "Show" : "Hidden")
                    }
                    type="button"
                    onClick={this.toggleButton}
                  >
                    ?
                  </button>
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
                <label className="container__checkbox">
                  Keep me logged in
                  <input
                    type="checkbox"
                    value={this.state.check}
                    name="checkbox"
                    onChange={this.handleCheck}
                  />
                  <span className="checkmark"></span>
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
