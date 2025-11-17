
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => { 
  
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  
  const cartContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const cartItemCardStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    border: '1px solid #eee',
  };

  const itemImageStyle = {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '4px',
    flexShrink: 0, 
  };

  const itemDetailsStyle = {
    flexGrow: 1, 
  };

  const itemNameStyle = {
    fontWeight: 'bold',
    fontSize: '1.1em',
    color: '#333',
    marginBottom: '5px',
  };

  const itemPriceStyle = {
    fontSize: '0.9em',
    color: '#666',
  };

  const quantityControlsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    flexShrink: 0,
  };

  const quantityButtonStyle = {
    padding: '5px 10px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1em',
    color: '#333',
  };

  const quantityDisplay = {
    minWidth: '30px',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const removeButtonStyle = {
    backgroundColor: 'transparent',
    color: '#d61a1aff', 
    border: 'none',
    fontSize: '1.5em',
    padding: '0 5px',
    cursor: 'pointer',
    marginLeft: '10px',
    flexShrink: 0,
  };

  const cartSummaryStyle = {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    borderTop: '2px solid #d61a1aff',
  };

  const totalRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.4em',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  };

  const checkoutButtonStyle = {
    padding: '15px 25px',
    backgroundColor: '#d61a1aff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1em',
    width: '100%',
    cursor: 'pointer',
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <p style={{ padding: '40px', textAlign: 'center', border: '1px dashed #ccc', borderRadius: '8px', backgroundColor: '#fdfdfd' }}>
          Votre panier est vide. <Link to="/" style={{ color: '#d61a1aff' }}>Découvrez nos produits</Link> !
        </p>
      ) : (
        <div style={cartContainerStyle}>
          {cartItems.map((item) => (
            <div key={item.id} style={cartItemCardStyle}>
              
              <img src={item.image} alt={item.name} style={itemImageStyle} />

              
              <div style={itemDetailsStyle}>
                <Link to={`/product/${item.id}`} style={itemNameStyle}>
                  {item.name}
                </Link>
                <p style={itemPriceStyle}>{item.price.toFixed(2)} DH / unité</p>
              </div>

              
              <div style={quantityControlsStyle}>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  style={quantityButtonStyle}
                >
                  -
                </button>
                <span style={quantityDisplay}>
                  {item.quantity}
                </span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  style={quantityButtonStyle}
                >
                  +
                </button>
              </div>
              
              
              <span style={{ fontWeight: 'bold', minWidth: '80px', textAlign: 'right', flexShrink: 0 }}>
                {(item.price * item.quantity).toFixed(2)}DH
              </span>
              
              
              <button 
                onClick={() => removeFromCart(item.id)}
                style={removeButtonStyle}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}

      
      <div style={cartSummaryStyle}>
        <div style={totalRowStyle}>
          <span>Total de la commande :</span>
          <span style={{ color: '#d61a1aff' }}>{totalPrice.toFixed(2)}DH</span>
        </div>
        
        <Link to="/checkout" style={{ textDecoration: 'none' }}>
            <button 
                disabled={cartItems.length === 0} 
                style={checkoutButtonStyle}
            >
                Passer à la Caisse Sécurisée
            </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;