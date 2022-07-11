function Drawer({ onClose, onRemove, items = [] }) {
    return (
        
      <div className="drawer__overlay">
        <div className="drawer">
          <h2>Cart <img onClick={onClose} src="./img/btn-remove.svg" alt="Remove btn" className="remove__btn" /></h2>


          {
            items.length > 0 ? (
              <div>
                <div className="cart__items">
                  {
                    items.map((obj) => (
                    (

                      <div className="cart__item">
                        <div style={{backgroundImage: `url(${obj.imageURL})`}} className="cart__img"></div>
                      <div>
                      <p>{obj.title}</p>
                      <b>{obj.price} $</b>
                      </div>  
                      <img src="./img/btn-remove.svg" alt="Remove btn" className="remove__btn" onClick={() => onRemove(obj.id)} />
                      </div>
                    )
                  ))
                }
              </div>
              <div className="cart__prices">
            <ul>
              <li><span>Total</span><div></div><b>398 $</b></li>
              <li><span>Tax 5%</span><div></div><b>19,9 $</b></li>
            </ul>
            <button className="order__btn">To order
            <img src="./img/arrow.svg" alt="Arrow" />
            </button>
          </div>
              </div>
            ) : (
              <div className="cart__empty">
                <img src="./img/cart-empty.webp" alt="empty-cart" />
              </div>
            )
          }


          
          

          
          
        </div>
        </div>
    )
}

export default Drawer