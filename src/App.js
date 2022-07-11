import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card'





function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    axios.get('https://62abb2aabd0e5d29af143603.mockapi.io/items').then(res => {
      setItems(res.data);
    })
    axios.get('https://62abb2aabd0e5d29af143603.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    })
  }, [])
  
  const onAddToCart = (obj) => {
    axios.post('https://62abb2aabd0e5d29af143603.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62abb2aabd0e5d29af143603.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onAddToFavorite = (obj) => {
    axios.post('https://62abb2aabd0e5d29af143603.mockapi.io/favorites', obj)
    setFavorites(prev => [...prev, obj])
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}  

      <Header onClickCart={() => setCartOpened(true)}/>
      
      
    


        <div className="content">
        <div className="main__title">
          <h1>{searchValue ? `Search by: "${searchValue}"` : 'All sneakers'}</h1>
          <div className="search__block">
            <img src="./img/search.svg" alt="Search" />
            <input onChange={onChangeSearchInput} placeholder="Search..." type="text" value={searchValue}/>
            {searchValue && <img onClick={() => {setSearchValue("")}} src="./img/btn-remove.svg" alt="Clear" className="remove__btn" />}
          </div>
        </div>
      {<div className="sneakers">
        {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
        <Card 
          key={item.title}
          title={item.title}
          price={item.price} 
          imageURL={item.imageURL}
          onClickFavorite={(obj) => onAddToFavorite(obj)}
          onPlus={onAddToCart}
          /> 
        ))}
      </div>}
    </div>

  </div>
)}

export default App;
