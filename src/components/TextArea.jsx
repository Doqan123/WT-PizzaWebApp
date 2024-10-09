import React from 'react';

function TextArea({ value, changeFn, fieldName }) {
    return (
        <div className="text-area-container">
            <label htmlFor={fieldName}>Sipariş Notu:
            <textarea
                id={fieldName}
                name={fieldName}
                value={value}
                onChange={changeFn}
                rows="4" // Satır sayısını ayarla
                cols="50" // Sütun sayısını ayarla
                placeholder="Sipariş notunuzu buraya yazın..."
            />
            </label>
        </div>
    );
}

export default TextArea;
