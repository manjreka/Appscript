import {Component} from 'react'

import {RiArrowDropDownLine, RiArrowDropUpLine} from 'react-icons/ri'
import IdealForFilter from '../IdealForFilter'
import './index.css'

const idealForList = [
  {label: 'Mens', id: 1},
  {label: 'Womans', id: 2},
  {label: 'baby & kids', id: 3},
]

class SideBar extends Component {
  state = {idealForFilter: false, listOfIdealForSelection: []}

  dropDownButtonClicked = () => {
    this.setState(prevState => ({idealForFilter: !prevState.idealForFilter}))
  }

  renderShowIdealFor = () => (
    <p
      type="button"
      className="dropDownButton"
      onClick={this.dropDownButtonClicked}
    >
      <RiArrowDropDownLine />
    </p>
  )

  renderHideIdealFor = () => (
    <p
      type="button"
      className="dropDownButton"
      onClick={this.dropDownButtonClicked}
    >
      <RiArrowDropUpLine />
    </p>
  )

  addValueToList = item => {
    this.setState(prevState => ({
      listOfIdealForSelection: [...prevState.listOfIdealForSelection, item],
    }))
  }

  deleteValueFromList = item => {
    const {listOfIdealForSelection} = this.state
    const filteredList = listOfIdealForSelection.filter(each => each !== item)
    this.setState({listOfIdealForSelection: filteredList})
  }

  render() {
    const {idealForFilter, listOfIdealForSelection} = this.state
    const idealForStyle = idealForFilter ? 'showIdealFor' : 'hideIdealFor'

    console.log(listOfIdealForSelection)

    return (
      <div className="sidebar-main-container">
        <div>
          <input type="checkbox" id="customizable" />
          <label htmlFor="customizable">CUSTOMIZABLE</label>
        </div>
        <div className="sidebarIdealFilter">
          <div className="sidebarFilter">
            <div>
              <p className="sidebarFilterHeading">IDEAL FOR</p>
              <p>ALL</p>
            </div>
            <div>
              {idealForFilter
                ? this.renderShowIdealFor()
                : this.renderHideIdealFor()}
            </div>
          </div>
          <div className={`toggle-sidebar-container ${idealForStyle}`}>
            <p>Unselect All</p>
            <ul>
              {idealForList.map(each => (
                <IdealForFilter
                  details={each}
                  key={each.id}
                  addValueToList={this.addValueToList}
                  deleteValueFromList={this.deleteValueFromList}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="sidebarIdealFilter">
          <div className="sidebarFilter">
            <div>
              <p className="sidebarFilterHeading">Occasion</p>
              <p>ALL</p>
            </div>
            <div>
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
        <div className="sidebarIdealFilter">
          <div className="sidebarFilter">
            <div>
              <p className="sidebarFilterHeading">WORK</p>
              <p>ALL</p>
            </div>
            <div>
              <RiArrowDropDownLine />{' '}
            </div>
          </div>
        </div>
        <div className="sidebarIdealFilter">
          <div className="sidebarFilter">
            <div>
              <p className="sidebarFilterHeading">FABRIC</p>
              <p>ALL</p>
            </div>
            <div>
              <RiArrowDropDownLine />{' '}
            </div>
          </div>
        </div>
        <div className="sidebarIdealFilter">
          <div className="sidebarFilter">
            <div>
              <p className="sidebarFilterHeading">SEGMENT</p>
              <p>ALL</p>
            </div>
            <div>
              <RiArrowDropDownLine />{' '}
            </div>
          </div>
        </div>
        <div className="sidebarIdealFilter">
          <div className="sidebarFilter">
            <div>
              <p className="sidebarFilterHeading">SUITABLE FOR</p>
              <p>ALL</p>
            </div>
            <div>
              <RiArrowDropDownLine />{' '}
            </div>
          </div>
        </div>
        <div className="sidebarIdealFilter">
          <div className="sidebarFilter">
            <div>
              <p className="sidebarFilterHeading">RAW MATERIAL</p>
              <p>ALL</p>
            </div>
            <div>
              <RiArrowDropDownLine />{' '}
            </div>
          </div>
        </div>
        <div className="sidebarIdealFilter">
          <div className="sidebarFilter">
            <div>
              <p className="sidebarFilterHeading">PATTERN</p>
              <p>ALL</p>
            </div>
            <div>
              <RiArrowDropDownLine />{' '}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar

//
