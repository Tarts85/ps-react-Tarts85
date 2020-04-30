import React, { Component } from 'react';
import TextInputStyledComponents from 'ps-react-tarts85/TextInputStyledComponents';

/** Required TextBox with error */
export default class ExampleError extends Component {
  render() {
    return (
      <TextInputStyledComponents
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
