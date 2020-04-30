import React, { Component } from 'react';
import TextInputCSSModules from 'ps-react-tarts85/TextInputCSSModules';

/** Required TextBox with error */
export default class ExampleError extends Component {
  render() {
    return (
      <TextInputCSSModules
        htmlId="example-error"
        label="First name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required."
      />
    )
  }
}
