
import React from 'react';
import Cart from '../components/Cart'; 

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
      <h1 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Mon Panier</h1> 
      <Cart 
        cartItems={cartItems} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity} 
      />
    </div>
  );
};

export default CartPage;