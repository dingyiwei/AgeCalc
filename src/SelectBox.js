import React from 'react';
import Select from 'react-select';


export default class SelectBox extends React.Component {
  state = {
    selectedOption: null
  }

  options = []

  handleChange = (selectedOption) => {
    this.setState({
      selectedOption
    });
    this.props.onChange(selectedOption.value);
  }

  render() {
    return (
      <Select value={this.state.selectedOption} onChange={this.handleChange} options={this.options} />
      );
  }
}
