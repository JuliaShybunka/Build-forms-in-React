import React from "react";

class InputForm extends React.Component {
  state = {
    name: ""
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" onChange={this.handleChange} />
          <input type="password" />
          <select>
            <option>1</option>
            <option>2</option>
          </select>
          <input type="checkbox"></input>
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}
export default InputForm;
