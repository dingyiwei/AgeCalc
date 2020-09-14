import React from 'react';
import ReignTitleSelectBox from './ReignTitleSelectBox';
import TianGanSelectBox from './TianGanSelectBox'
import DiZhiSelectBox from './DiZhiSelectBox'


export default class YearBox extends React.Component {
  state = {
    reign: 1368,
    tiangan: 4,
    dizhi: 8,
    year: 1368
  }

  render() {
    return (
      <div>
        {this.props.value}: {this.state.year}
        <ReignTitleSelectBox onChange={this.handleReignChange} />
        <TianGanSelectBox onChange={this.handleTianGanChange} />
        <DiZhiSelectBox onChange={this.handleDiZhiChange} />
      </div>
    );
  }

  handleReignChange = (reign) => {
    this.setState({
      reign: reign
    }, this.updateYear);
  }

  handleTianGanChange = (tiangan) => {
    this.setState({
      tiangan: tiangan
    }, this.updateYear);
  }

  handleDiZhiChange = (dizhi) => {
    this.setState({
      dizhi: dizhi
    }, this.updateYear);
  }

  updateYear = () => {
    let year = this.getYear()
    this.setState({
      year: year
    });
  }

  getYear = () => {
    let jiaziCount = Math.floor((this.state.reign - 1324) / 60);
    let ganzhi = 0;
    for (let i = 0; i < 6; i++)
    {
      if ((i * 12 + this.state.dizhi) % 10 === this.state.tiangan)
      {
        ganzhi = i * 12 + this.state.dizhi;
        break;
      }
    }
    let year = 1324 + jiaziCount * 60 + ganzhi;
    this.props.onChange(year);
    return year;
  }
}
