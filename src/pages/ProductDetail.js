import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products'; 

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div>
        <h2>Produit non trouvé</h2>
        <p>Retournez à la <Link to="/">liste des produits</Link>.</p>
      </div>
    );
  }
  
  const buttonStyle = {
    padding: '15px 30px', 
    fontSize: '1.2em', 
    backgroundColor: 'green', 
    color: 'white', 
    border: 'none', 
    cursor: 'pointer',
    borderRadius: '4px'
  };

  return (
    <div style={{ display: 'flex', gap: '30px', padding: '20px', border: '1px solid #cf0e0eff', backgroundColor: 'white', borderRadius: '8px' }}>
      <div style={{ flex: 1 }}>
        <img 
            src={product.image} 
            alt={product.name} 
            style={{ 
                width: '100%', 
                height: '350px', 
                objectFit: 'cover', 
                borderRadius: '8px' 
            }}
        />
      </div>
      
      <div style={{ flex: 2 }}>
        <h1>{product.name}</h1>
        <p style={{ fontSize: '1.8em', color: '#d61a1aff', fontWeight: 'bold' }}>
          {product.price.toFixed(2)} DH
        </p>
        <p style={{ fontSize: '1.1em' }}>{product.description}</p>
        
        <p>
          **Détails :** Livré sous 5 jours. Garantie 2 ans. Matériaux durables et éco-responsables.
        </p>

        <button 
          onClick={() => addToCart(product)}
          style={buttonStyle}
        >
          Ajouter au Panier
        </button>
        <div style={{ marginTop: '15px' }}>
          <Link to="/">← Retour à la liste</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;