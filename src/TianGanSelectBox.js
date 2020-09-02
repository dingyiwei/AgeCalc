import SelectBox from './SelectBox'


export default class TianGanSelectBox extends SelectBox {
  state = {
    selectedOption: { value: 4, label: '戊'}
  }
  
  options = [
    { value: 0, label: '甲'},
    { value: 1, label: '乙'},
    { value: 2, label: '丙'},
    { value: 3, label: '丁'},
    { value: 4, label: '戊'},
    { value: 5, label: '己'},
    { value: 6, label: '庚'},
    { value: 7, label: '辛'},
    { value: 8, label: '壬'},
    { value: 9, label: '癸'}
  ]
}
