import React from 'react';
import ReactDOM from 'react-dom';
import YearBox from './YearBox'

class Page extends React.Component {
  render() {
    return (
      <div>
        <YearBox value='生' />
        <YearBox value='卒' />
        <p>-1</p>
      </div>
    )
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);