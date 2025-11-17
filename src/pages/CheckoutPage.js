
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CheckoutPage = ({ cartItems, totalPrice, clearCart }) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const navigate = useNavigate();
  
  const formGroupStyle = { marginBottom: '15px' };
  const inputStyle = { width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ddd', borderRadius: '4px' };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    if (cartItems.length === 0) return;
    
    
    clearCart(); 
    
    
    setIsOrderPlaced(true);
  };

  
  if (isOrderPlaced) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#e6ffed', border: '1px solid #d61a1aff', borderRadius: '8px', maxWidth: '600px', margin: '50px auto' }}>
        <h1>🎉 Commande Confirmée !</h1>
        <p>Merci pour votre achat. Votre commande sera traitée dans les plus brefs délais.</p>
        <button 
            onClick={() => navigate('/')} 
            style={{ padding: '10px 20px', backgroundColor: '#d61a1aff', color: 'white', border: 'none', marginTop: '20px', borderRadius: '4px' }}
        >
            Retourner à la boutique
        </button>
      </div>
    );
  }

  
  if (cartItems.length === 0) {
      return (
          <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#fff0f0', border: '1px solid #9b1a1aff', borderRadius: '8px', maxWidth: '600px', margin: '50px auto' }}>
              <h2>Votre panier est vide.</h2>
              <button onClick={() => navigate('/')} style={{ padding: '10px 20px', backgroundColor: '#ebe2e2ff', border: 'none', marginTop: '20px', borderRadius: '4px' }}>
                  Voir les produits
              </button>
          </div>
      );
  }

  return (
    <div style={{ display: 'flex', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      
      <div style={{ flex: 2, padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <h2>Informations de Livraison</h2>
        <form onSubmit={handlePlaceOrder}>
          <div style={formGroupStyle}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Nom Complet</label>
            <input type="text" required style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Adresse Postale</label>
            <input type="text" required style={inputStyle} />
          </div>
          
          <h2 style={{ marginTop: '30px' }}>Paiement (Simulation)</h2>
          <div style={formGroupStyle}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Numéro de Carte</label>
            <input type="text" required pattern="\d{16}" maxLength="16" style={inputStyle} placeholder="XXXX XXXX XXXX XXXX" />
          </div>
          
          <button 
            type="submit" 
            style={{ 
              padding: '15px 30px', 
              backgroundColor: '#d61a1aff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              fontSize: '1.2em', 
              width: '100%', 
              marginTop: '20px'
            }}
          >
            Payer {totalPrice.toFixed(2)} DH
          </button>
        </form>
      </div>

      <div style={{ flex: 1, padding: '20px', backgroundColor: '#eee3e3ff', borderRadius: '8px' }}>
        <h2>Récapitulatif</h2>
        {cartItems.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', borderBottom: '1px dotted #ccc', paddingBottom: '5px' }}>
            <span>{item.name} ({item.quantity}x)</span>
            <span>{(item.price * item.quantity).toFixed(2)} DH</span>
          </div>
        ))}
        
        <div style={{ marginTop: '20px', paddingTop: '10px', borderTop: '2px solid #ebe2e2ff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.3em' }}>
            <span>Total Final :</span>
            <span style={{ color: '#d61a1aff' }}>{totalPrice.toFixed(2)} DH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;