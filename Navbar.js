import React from 'react';

const Navbar = (props) => {
       return (
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img 
                    style={styles.cartIcon}
                    src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png"  
                    alt="cart-icon" />
                    <span style={styles.cartCount}><b>{props.count}</b></span>
                </div>
            </div>
        );
    }

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20,
    },
    nav: {
        height: 70,
        background: "#4267b2",
        display: 'flex',
        justifyContent: 'flex-content',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '60%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
}

export default Navbar;