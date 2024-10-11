import '../styles/Topping.css'; 

function Topping({ changeFn, checked, fieldName, value, label }) {
    const inputId = `topping-${value}`; // Her checkbox için benzersiz bir id oluşturuyoruz
    return (
        <div className="topping">
            <label htmlFor={inputId}> {/* Label ile input'un id'sini eşliyoruz */}
                <input
                    type="checkbox"
                    id={inputId} // input'a id ekledik
                    onChange={changeFn}
                    checked={checked}
                    name={fieldName}
                    value={value}
                />
                {label}
            </label>
        </div>
    )
}

export default Topping;
