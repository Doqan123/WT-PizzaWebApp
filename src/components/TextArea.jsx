import "../styles/TextArea.css"

function TextArea({ value, changeFn, fieldName,label }) {
    return (
        <div className="text-area-container">
            <label htmlFor={fieldName}>
            <h3>{label}</h3>
            <textarea
                id={fieldName}
                name={fieldName}
                value={value}
                onChange={changeFn}
                rows="2" 
                cols="100" 
                placeholder="Sipariş notunuzu buraya yazın..."
            />
            </label>
        </div>
    );
}

export default TextArea;
