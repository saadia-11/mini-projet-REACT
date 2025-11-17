import React from 'react';


const spinnerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px', 
    width: '100%',
    padding: '20px 0',
};

const spinnerStyle = {
    border: '4px solid #f3f3f3', 
    borderTop: '4px solid #d61a1aff', 
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    animation: 'spin 1s linear infinite', 
};

if (!document.getElementById('spin-keyframes')) {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.id = 'spin-keyframes';
    styleSheet.innerText = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(styleSheet);
}


const LoadingSpinner = ({ message = "Chargement en cours..." }) => {
    return (
        <div style={spinnerContainerStyle}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={spinnerStyle}></div>
                <p style={{ marginTop: '10px', color: '#555', fontSize: '0.9em' }}>{message}</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;