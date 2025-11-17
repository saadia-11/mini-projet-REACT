
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  const cardStyle = {
    border: '1px solid #e0e0e0',
    padding: '20px',
    margin: '15px',
    width: '280px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const priceStyle = {
    fontWeight: '700',
    fontSize: '1.4em',
    color: '#d61a1aff', 
    margin: '10px 0',
  };

  const buttonStyle = {
    backgroundColor: '#d61a1aff',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '4px',
    marginTop: '10px',
  };

  return (
    <div style={cardStyle}>
      
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ 
          width: '100%', 
          height: '180px', 
          objectFit: 'cover', 
          borderRadius: '4px', 
          marginBottom: '10px' 
        }}
      />
      
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: '#333' }}>
        <h3 style={{ margin: '5px 0' }}>{product.name}</h3>
      </Link>
      <p style={{ fontSize: '0.9em', color: '#666' }}>
        {product.description}
      </p>

      <div>
        <p style={priceStyle}>
          {product.price.toFixed(2)} DH
        </p>
        <button onClick={() => addToCart(product)} style={buttonStyle}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductCard;