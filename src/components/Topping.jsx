
function Topping({ changeFn, checked, fieldName, value, label }) {
    return (
        <div>
            <label className="checkbox">
                <input
                    type="checkbox"
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