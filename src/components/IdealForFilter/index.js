const IdealForFilter = props => {
  const {details, addValueToList, deleteValueFromList} = props
  const {id, label} = details

  const checkboxClicked = event => {
    const check = event.target.checked
    const selecteCheckbox = event.target.value
    if (check) {
      addValueToList(selecteCheckbox)
    } else {
      deleteValueFromList(selecteCheckbox)
    }
  }

  return (
    <div>
      <input type="checkbox" onChange={checkboxClicked} value={label} />
      <label>{label}</label>
    </div>
  )
}

export default IdealForFilter
