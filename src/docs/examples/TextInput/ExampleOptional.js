import React, { Component } from 'react';
import TextInput from 'ps-react-tarts85/TextInput';

/** Optional TextBox */
export default class ExampleOptional extends Component {
  render() {
    return (
      <TextInput
          htmlId="example-optional"
          label="First name"
          name="firstname"
          onChange={() => {}}
      />
    )
  }
}
