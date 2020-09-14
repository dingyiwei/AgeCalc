import SelectBox from './SelectBox'


export default class ReignTitleSelectBox extends SelectBox {
  state = {
    selectedOption: { value: 1368, label: '洪武'}
  }

  options = [
    { value: 1368, label: '洪武'},
    { value: 1403, label: '永乐'},
    { value: 1425, label: '洪熙'},
    { value: 1426, label: '宣德'},
    { value: 1436, label: '正统'},
    { value: 1450, label: '景泰'},
    { value: 1457, label: '天顺'},
    { value: 1465, label: '成化'},
    { value: 1488, label: '弘治'},
    { value: 1506, label: '正德'},
    { value: 1522, label: '嘉靖'},
    { value: 1567, label: '隆庆'},
    { value: 1573, label: '万历'},
    { value: 1620, label: '泰昌'},
    { value: 1621, label: '天启'},
    { value: 1628, label: '崇祯'},
    { value: 1644, label: '顺治'},
    { value: 1662, label: '康熙'},
    { value: 1723, label: '雍正'},
    { value: 1736, label: '乾隆'},
    { value: 1796, label: '嘉庆'},
    { value: 1821, label: '道光'},
    { value: 1851, label: '咸丰'},
    { value: 1862, label: '同治'},
    { value: 1875, label: '光绪'},
    { value: 1909, label: '宣统'}
  ]
}
