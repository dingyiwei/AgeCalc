import SelectBox from './SelectBox'


export default class DiZhiSelectBox extends SelectBox {
  state = {
    selectedOption: { value: 8, label: '申'}
  }
  
  options = [
    { value: 0, label: '子'},
    { value: 1, label: '丑'},
    { value: 2, label: '寅'},
    { value: 3, label: '卯'},
    { value: 4, label: '辰'},
    { value: 5, label: '巳'},
    { value: 6, label: '午'},
    { value: 7, label: '未'},
    { value: 8, label: '申'},
    { value: 9, label: '酉'},
    { value: 10, label: '戌'},
    { value: 11, label: '亥'},
  ]
}
