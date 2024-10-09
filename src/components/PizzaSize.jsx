function PizzaSize({ changeFn, checked, fieldName, value, label }) {
    return (
        <div>
            <label className="pizzaSize">
                <input
                    type="radio"
                    onChange={changeFn}
                    checked={checked}
                    name={fieldName}
                    value={value}
                />
                {label}
            </label>
        </div>
    );
}

export default PizzaSize;
