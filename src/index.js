import React from 'react';
import ReactDOM from 'react-dom';
import YearBox from './YearBox'

class Page extends React.Component {
  state = {
    birthYear: 1368,
    deathYear: 1368
  }

  render() {
    return (
      <div>
        <YearBox value='生' onChange={this.handleBirthYearChanged} />
        <YearBox value='卒' onChange={this.handleDeathYearChanged} />
        <p>{this.onYearChanged()}</p>
      </div>
    )
  }

  handleBirthYearChanged = (year) => {
    this.setState({
      birthYear: year
    });
  }

  handleDeathYearChanged = (year) => {
    this.setState({
      deathYear: year
    });
  }

  onYearChanged = () => {
    console.log(this.state)
    return this.state.deathYear - this.state.birthYear;
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);