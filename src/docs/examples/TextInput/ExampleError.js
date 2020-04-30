import React, { Component } from 'react';
import TextInput from 'ps-react-tarts85/TextInput';

/** Required TextBox with error */
export default class ExampleError extends Component {
  render() {
    return (
      <TextInput
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
