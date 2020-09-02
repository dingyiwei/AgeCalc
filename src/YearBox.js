import React from 'react';
import ReignTitleSelectBox from './ReignTitleSelectBox';
import TianGanSelectBox from './TianGanSelectBox'
import DiZhiSelectBox from './DiZhiSelectBox'


export default class YearBox extends React.Component {
  state = {
    reign: 1368,
    tiangan: 4,
    dizhi: 8
  }

  render() {
    return (
      <div>
        {this.props.value}: {this.getYear()}
        <ReignTitleSelectBox onChange={this.handleReignChange} />
        <TianGanSelectBox onChange={this.handleTianGanChange} />
        <DiZhiSelectBox onChange={this.handleDiZhiChange} />
      </div>
    );
  }

  handleReignChange = (reign) => {
    this.setState({
      reign: reign
    })
  }

  handleTianGanChange = (tiangan) => {
    this.setState({
      tiangan: tiangan
    })
  }

  handleDiZhiChange = (dizhi) => {
    this.setState({
      dizhi: dizhi
    })
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
    console.log(jiaziCount, ganzhi);
    return 1324 + jiaziCount * 60 + ganzhi;
  }
}
