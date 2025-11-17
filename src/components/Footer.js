import React from 'react';
import { Link } from 'react-router-dom';

const footerStyle = {
    backgroundColor: '#333', 
    color: 'white',
    padding: '30px 40px',
    marginTop: '50px',
    textAlign: 'center',
    borderTop: '5px solid #e7dfdfff', 
};

const footerContentStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
};

const columnStyle = {
    padding: '10px',
    minWidth: '150px',
    textAlign: 'left',
};

const linkStyle = {
    color: '#ccc',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '8px',
    transition: 'color 0.2s'
};

const linkHover = {
    color: '#d61a1aff', 
};

const copyrightStyle = {
    marginTop: '20px',
    fontSize: '0.9em',
    borderTop: '1px solid #555',
    paddingTop: '15px',
};

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={footerContentStyle}>
                
                
                <div style={columnStyle}>
                    <h3 style={{ borderBottom: '2px solid #d61a1aff', paddingBottom: '5px' }}>Navigation</h3>
                    <Link to="/" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHover.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>Accueil</Link>
                    <Link to="/cart" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHover.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>Mon Panier</Link>
                    <Link to="/checkout" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHover.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>Caisse</Link>
                </div>

                
                <div style={columnStyle}>
                    <h3 style={{ borderBottom: '2px solid #d61a1aff', paddingBottom: '5px' }}>Informations</h3>
                    <a href="#" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHover.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>Conditions Générales</a>
                    <a href="#" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHover.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>Politique de Confidentialité</a>
                    <a href="#" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHover.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>FAQ</a>
                </div>

                
                <div style={columnStyle}>
                    <h3 style={{ borderBottom: '2px solid #d61a1aff', paddingBottom: '5px' }}>Contact</h3>
                    <p style={{ margin: 0 }}>Email: contact@bookstore.com</p>
                    <p style={{ margin: '5px 0 0 0' }}>Téléphone: +212 5 00 00 00 00</p>
                </div>
            </div>

            <div style={copyrightStyle}>
                © {new Date().getFullYear()} BOOKS STORE. Tous droits réservés.
            </div>
        </footer>
    );
};

export default Footer;