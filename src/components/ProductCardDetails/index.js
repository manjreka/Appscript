import {IoIosStarOutline} from 'react-icons/io'
import {FaHeart} from 'react-icons/fa'

import './index.css'

const ProductCardDetails = props => {
  const {details, toggleIsFavorite} = props
  const {
    title,
    price,
    id,
    description,
    altText,
    image,
    rate,
    count,
    like,
    rating,
  } = details

  const heartClicked = () => {
    toggleIsFavorite(id)
  }

  const color = like ? 'red' : 'transparent'

  return (
    <li className="product-details-container">
      <img src={image} alt={altText} className="product-images" />
      <h1 className="product-title">{title}</h1>
      <p>Sign in or Create an account to see pricing</p>
      <div className="product-description-details">
        <p className="product-reviews">
          {rate}
          <IoIosStarOutline className="rating-icon" /> {count} Reviews
        </p>
        <button type="button" className={color} onClick={heartClicked}>
          <FaHeart />
        </button>
      </div>
    </li>
  )
}

export default ProductCardDetails
