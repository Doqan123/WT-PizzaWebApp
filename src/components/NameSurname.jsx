import "../styles/NameSurname.css"
function NameSurname({changeFn, value, fieldName,label}) {
    return (
        <div className="nameSurname">
            <label > <h3>{label}</h3>
            <input
                type="text"
                name={fieldName}
                value={value}
                onChange={changeFn}
            />
            </label>
           
        </div>
    )


}
export default NameSurname;
