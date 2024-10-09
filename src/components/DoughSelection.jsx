function DoughSelection({ changeFn, dough }) {
    return (
        <div>
            <label className="dough">Hamur Seçimi:
            <select name="dough" value={dough} defaultValue={'DEFAULT'} onChange={changeFn}>
            <option value="DEFAULT" disabled>Seçiminiz</option>
                <option value="ince">İnce</option>
                <option value="normal">Normal</option>
                <option value="kalın">Kalın</option>
            </select>
            </label>
        </div>
    );
}

export default DoughSelection;
