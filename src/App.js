import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { products } from './data/products'; 

import ProductDetail from './pages/ProductDetail'; 
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

import ProductCard from './components/ProductCard'; 
import Footer from './components/Footer'; 

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const addToCart = (productToAdd) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(item => item.id === productToAdd.id);
      if (existingItem) {
        return currentCart.map(item =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...currentCart, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((currentCart) => {
      if (newQuantity <= 0) {
        return currentCart.filter(item => item.id !== productId);
      }
      return currentCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      );
    });
  };
  
  const clearCart = () => {
    setCart([]);
  };
  
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); 
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const HomePage = () => (
    <div>
      {searchTerm && <h2 style={{textAlign: 'left', marginBottom: '20px'}}>Résultats pour "{searchTerm}"</h2>}
      {filteredProducts.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      ) : (
        <p style={{textAlign: 'center', padding: '50px'}}>Aucun livre trouvé correspondant à votre recherche.</p>
      )}
    </div>
  );
  
  const navButtonStyle = {
      padding: '10px 20px', 
      borderRadius: '25px', 
      fontWeight: '600',
      border: '1px solid transparent',
      textDecoration: 'none', 
      transition: 'all 0.3s ease',
      display: 'inline-flex', 
      alignItems: 'center',
      textAlign: 'center',
      cursor: 'pointer',
      minWidth: '120px' 
  };

  const catalogueButtonStyle = {
      ...navButtonStyle,
      backgroundColor: 'transparent',
      color: '#333',
      border: '1px solid #ebe1e1ff',
      marginRight: '15px'
  };

  const cartButtonStyle = {
      ...navButtonStyle,
      backgroundColor: '#d61a1aff', 
      color: 'white',
      border: 'none',
      paddingLeft: '25px', 
      paddingRight: '25px',
  };
  
  
  const searchInputStyle = {
    padding: '10px 15px',
    borderRadius: '25px',
    border: '1px solid #0c0c0cff',
    width: '300px',
    marginRight: '20px',
    outline: 'none',
    transition: 'border-color 0.3s',
  };


  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> 
      
      <nav style={{ 
          padding: '15px 40px', 
          background: 'white', 
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0, 
          position: 'sticky', 
          top: 0,
          zIndex: 1000, 
      }}>
        <Link 
          to="/" 
          style={{ 
            fontSize: '1.8em', 
            fontWeight: '900', 
            color: '#d61a1aff', 
            textDecoration: 'none',
            whiteSpace: 'nowrap', 
            marginRight: '30px'
          }}
        >
           BOOKS STORE
        </Link>
        
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <input
            type="text"
            placeholder="Rechercher un livre par titre ou description..."
            style={searchInputStyle}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (window.location.pathname !== '/') {
              }
            }}
          />
        </div>


        <div style={{ display: 'flex', flexShrink: 0 }}>
          <Link 
            to="/" 
            style={catalogueButtonStyle} 
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#d60b0bff'} 
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'} 
          >
            Catalogue
          </Link>
          
          <Link 
            to="/cart" 
            style={cartButtonStyle} 
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#000000ff'} 
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#d60b0bff'}
          >
             Panier ({totalItems})
          </Link>
        </div>
      </nav>

      <main style={{ padding: '40px 20px', flexGrow: 1 }}> 
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          
          <Route 
            path="/cart" 
            element={
              <CartPage 
                cartItems={cart} 
                removeFromCart={removeFromCart} 
                updateQuantity={updateQuantity}
              />
            } 
          />
          
          <Route 
            path="/product/:id" 
            element={<ProductDetail addToCart={addToCart} />} 
          />
          
          <Route
            path="/checkout"
            element={
              <CheckoutPage
                cartItems={cart}
                totalPrice={totalPrice}
                clearCart={clearCart}
              />
            }
          />
        </Routes>
      </main>
      
      
      <Footer /> 

    </div>
  );
}

export default App;