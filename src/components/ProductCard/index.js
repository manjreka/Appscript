import {Component} from 'react'
import ProductCardDetails from '../ProductCardDetails'
import ProductHeader from '../ProductHeader'
import SideBar from '../Sidebar'
import Footer from '../Footer'

import './index.css'

const sortbyOptions = [
  {
    optionId: 'RECOMMENDATIONS',
    displayText: 'RECOMMENDED',
  },
  {
    optionId: 'NEWEST_FIRST',
    displayText: 'NEWEST FIRST',
  },
  {
    optionId: 'POPULAR',
    displayText: 'POPULAR',
  },
  {
    optionId: 'PRICE_HIGH',
    displayText: 'PRICE: HIGH TO LOW',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'PRICE: LOW TO HIGH',
  },
]

class ProductCard extends Component {
  state = {
    productList: [],
    status: '',
    activeOptionId: sortbyOptions[0].optionId,
    show: true,
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({status: 'loading'})

    const url = `https://fakestoreapi.com/products?price=asc`

    const response = await fetch(url)
    const convertedData = await response.json()

    const updatedList = convertedData.map(each => ({
      id: each.id,
      price: each.price,
      image: each.image,
      title: each.title,
      description: each.description,
      category: each.category,
      rate: each.rating.rate,
      count: each.rating.count,
      like: false,
      altText: 'product',
    }))

    // console.log(data)

    const data = updatedList.sort((a, b) => b.rate - a.rate)

    console.log(data)

    // *********price high to low and low to high
    // const descArray = data.sort((a, b) => b.price - a.price)

    // console.log(descArray)

    // most recommended to least recommended
    // const descArray = data.sort((a, b) => b.rate - a.rate)

    // console.log(descArray)

    // most popular to least popular
    // const descArray = data.sort((a, b) => b.count - a.count)

    // console.log(descArray)
    /*
    const filteredArray = data.filter(
      each => each.category === "men's clothing",
    )

    console.log(filteredArray)
     const filteredArray = data.includes(each =>
      each.description.includes('clothing'),
    )

    console.log(filteredArray)
*/

    if (data.length === 0) {
      this.setState({status: 'failure'})
    } else {
      this.setState({productList: data, status: 'success'})
    }
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      productList: prevState.productList.map(each => {
        if (id === each.id) {
          return {...each, like: !each.like}
        }
        return each
      }),
    }))
  }

  updateActiveOptionId = activeOptionId => {
    const {productList} = this.state
    if (activeOptionId === 'RECOMMENDATIONS') {
      const recommendedList = productList.sort((a, b) => b.rate - a.rate)

      console.log(recommendedList)
      this.setState({productList: recommendedList, activeOptionId})
    } else if (activeOptionId === 'POPULAR') {
      const popularList = productList.sort((a, b) => b.count - a.count)

      console.log(popularList)
      this.setState({productList: popularList, activeOptionId})
    } else if (activeOptionId === 'PRICE_HIGH') {
      const priceHighList = productList.sort((a, b) => b.price - a.price)

      console.log(priceHighList)
      this.setState({productList: priceHighList, activeOptionId})
    } else if (activeOptionId === 'PRICE_LOW') {
      const priceLowList = productList.sort((a, b) => a.price - b.price)

      console.log(priceLowList)
      this.setState({productList: priceLowList, activeOptionId})
    } else {
      const newProductsList = productList.sort((a, b) => a.count - b.count)
      this.setState({productList: newProductsList, activeOptionId})
    }
  }

  toggleSidebarDisplay = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  renderShowSidebarAndProducts = () => {
    const {productList} = this.state
    return (
      <div className="product-main-bg-container">
        <div className="sidebar">
          <SideBar />
        </div>
        <ul className="product-main-container">
          {productList.map(each => (
            <ProductCardDetails
              toggleIsFavorite={this.toggleIsFavorite}
              details={each}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderHideSidebarAndProducts = () => {
    const {productList} = this.state
    return (
      <ul className="product-main-container">
        {productList.map(each => (
          <ProductCardDetails
            toggleIsFavorite={this.toggleIsFavorite}
            details={each}
            key={each.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {activeOptionId, show} = this.state
    return (
      <div className="bg-container">
        <div className="product-description">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p className="product-description-text">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
        <hr className="line-deskstop" />
        <ProductHeader
          sortbyOptions={sortbyOptions}
          activeOptionId={activeOptionId}
          updateActiveOptionId={this.updateActiveOptionId}
          toggleSidebarDisplay={this.toggleSidebarDisplay}
          show={show}
        />
        <hr className="line-deskstop" />
        <div>
          {show
            ? this.renderShowSidebarAndProducts()
            : this.renderHideSidebarAndProducts()}
        </div>
        <Footer />
      </div>
    )
  }
}

export default ProductCard
