import "../styles/DoughSelection.css"
function DoughSelection({ changeFn, dough }) {
    return (
        <div className="dough-selection">
            <label htmlFor="dough">
            <select name="dough" value={dough} defaultValue={'DEFAULT'} onChange={changeFn}>
            <option value="DEFAULT" disabled>Hamur Kalınlığı</option>
                <option value="ince">İnce</option>
                <option value="normal">Normal</option>
                <option value="kalın">Kalın</option>
            </select>
            </label>
        </div>
    );
}

export default DoughSelection;
