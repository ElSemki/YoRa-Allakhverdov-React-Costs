import './CostsFilter.css';

const CostsFilter = ({ onChangeYear, year }) => {
	const yearChangeHandler = evt => onChangeYear(evt.target.value);

	return (
		<div className="costs-filter">
			<div className="costs-filter__control">
				<label>Выбор По Году</label>
				<select value={year} onChange={yearChangeHandler}>
					<option value="2023">2023</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
				</select>
			</div>
		</div>
	);
};

export default CostsFilter;
