import {PiLessThan, PiGreaterThan} from 'react-icons/pi'

import './index.css'

const ProductHeader = props => {
  const {
    sortbyOptions,
    show,
    activeOptionId,
    toggleSidebarDisplay,
    updateActiveOptionId,
  } = props

  const onChangeSortby = event => {
    updateActiveOptionId(event.target.value)
  }

  const onClickToggleButton = () => {
    toggleSidebarDisplay()
  }

  const renderHideSideBar = () => (
    <div className="product-header-toggle-sub-container">
      <p>
        <PiGreaterThan />
      </p>
      <p className="product-header-filter-para">SHOW FILTER</p>
    </div>
  )

  const renderShowSideBar = () => (
    <div className="product-header-toggle-sub-container">
      <p>
        <PiLessThan />
      </p>
      <p className="product-header-filter-para">HIDE FILTER</p>
    </div>
  )

  return (
    <div className="product-header-container">
      <div className="product-header-toggle-container">
        <p>3625 ITEMS</p>
        <button
          type="button"
          className="product-header-button"
          onClick={onClickToggleButton}
        >
          {show ? renderShowSideBar() : renderHideSideBar()}
        </button>
      </div>

      <div className="mobile-tablet-view-filter-container">
        <div>
          <h1>FILTER</h1>
        </div>
        <div className="line-container">
          <hr className="line" />
        </div>
        <div>
          <select
            className="sort-by-select"
            value={activeOptionId}
            onChange={onChangeSortby}
          >
            {sortbyOptions.map(eachOption => (
              <option
                key={eachOption.optionId}
                value={eachOption.optionId}
                className="select-option"
              >
                {eachOption.displayText}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="deskstop-view-container">
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={onChangeSortby}
        >
          {sortbyOptions.map(eachOption => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ProductHeader
