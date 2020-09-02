import SelectBox from './SelectBox'


export default class ReignTitleSelectBox extends SelectBox {
  state = {
    selectedOption: { value: 1368, label: '洪武'}
  }

  options = [
    { value: 1368, label: '洪武'},
    { value: 1403, label: '永乐'},
  ]
}
