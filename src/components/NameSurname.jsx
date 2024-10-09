
function NameSurname({changeFn, value, fieldName, label}) {
    return (
        <div className="nameSurname">
            <label >{label} </label>
            <input
                type="text"
                name={fieldName}
                value={value}
                onChange={changeFn}
            />

           
        </div>
    )


}
export default NameSurname;
