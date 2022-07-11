import styles from './Card.module.scss'
import React from 'react'


function Card ({ onClickFavorite, imageURL, title, price, onPlus }) {

  const [isAdded, setIsAdded] = React.useState(false)
  const [isFavorite, setIsFavorite] = React.useState(false)

  const onClickPlus = () => {
    onPlus({title, imageURL, price})
    setIsAdded(!isAdded)
  }

  const onFavorite = (obj) => {
    onClickFavorite({title, imageURL, price})
    setIsFavorite(!isFavorite)
  }

    return (
        <div className={styles.card}>
          <div className="card__favorite" onClick={onFavorite}>
            <img src={isFavorite ? './img/head-liked.png' : './img/heard-unliked.svg'} className={styles.card__favorite}/>
          </div>
          <img width={133} height={112} src={imageURL} alt="sneakers img" />
          <h5>{title}</h5>
          <div className={styles.card__bottom}>
          <div className={styles.price__card}>
              <span>Price</span>
              <b>{price} $</b>
            </div>
            <img src={isAdded ? './img/card-added.svg' : './img/card-plus.svg'} alt="plus btn" onClick={onClickPlus} className={styles.card__button}/>
          </div>
        </div>
    )
}
export default Card
