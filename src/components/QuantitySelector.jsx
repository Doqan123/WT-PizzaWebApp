
import React from 'react';

function QuantitySelector({ quantity, onQuantityChange }) {
    const handleQuantityChange = (operation) => {
        if (operation === "increase") {
            onQuantityChange(quantity + 1);
        } else {
            onQuantityChange(Math.max(quantity - 1, 1)); // Minimum 1 değerini kontrol et
        }
    };

    return (
        <div className="quantity-container">
            <button type="button" onClick={() => handleQuantityChange("decrease")}>-</button>
            <span>{quantity}</span>
            <button type="button" onClick={() => handleQuantityChange("increase")}>+</button>
        </div>
    );
}

export default QuantitySelector;
