import React from 'react';

const Header = () => {
    const styles = {
        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px',
            background: '#0f172a',
            color: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        brand: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '1.1rem',
            fontWeight: 600,
        },
        logo: {
            width: 36,
            height: 36,
            borderRadius: 6,
            background: '#06b6d4',
            display: 'inline-block',
        },
        nav: {
            display: 'flex',
            gap: '14px',
            alignItems: 'center',
        },
        link: {
            color: '#cbd5e1',
            textDecoration: 'none',
            fontSize: '0.95rem',
        },
        button: {
            padding: '6px 10px',
            background: '#06b6d4',
            color: '#0f172a',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontWeight: 600,
        },
    };

    return (
        <header style={styles.header}>
            <div style={styles.brand}>
                <span style={styles.logo} aria-hidden="true" />
                <span>My React App</span>
            </div>

            <nav style={styles.nav} aria-label="Main navigation">
                <a href="#home" style={styles.link}>Home</a>
                <a href="#about" style={styles.link}>About</a>
                <a href="#contact" style={styles.link}>Contact</a>
                <button style={styles.button}>Sign In</button>
            </nav>
        </header>
    );
};

export default Header;