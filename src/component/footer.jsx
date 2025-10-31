import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#f1f1f1', padding: '10px', textAlign: 'center' }}>
            <p>&copy; 2023 Your Company. All rights reserved.</p>
            <a href="/privacy-policy">Privacy Policy</a> | 
            <a href="/terms-of-service">Terms of Service</a>
        </div>
    );
};

export default Footer;