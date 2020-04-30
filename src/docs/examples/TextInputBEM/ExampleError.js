import React, { Component } from 'react';
import TextInputBEM from 'ps-react-tarts85/TextInputBEM';

/** Required TextBox with error */
export default class ExampleError extends Component {
  render() {
    return (
      <TextInputBEM
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
