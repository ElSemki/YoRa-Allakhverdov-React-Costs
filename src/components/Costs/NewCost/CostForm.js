import { useState } from 'react';
import './CostForm.css';

const CostForm = ({ onAddCost, onShowForm }) => {
	const [data, setData] = useState({ name: '', sum: '', date: '' });

	const formSubmitHandler = evt => {
		evt.preventDefault();
		onAddCost({
			id: String(Date.now() + Math.floor(Math.random() * 1000)),
			date: new Date(data.date),
			description: data.name,
			amount: data.sum,
		});
		setData({ name: '', sum: '', date: '' });
		onShowForm(false);
	};

	const inputChangeHandler = (evt, name) =>
		setData({ ...data, [name]: evt.target.value });

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="new-cost__controls">
				<div className="new-cost__control">
					<label>Название</label>
					<input
						onChange={evt => inputChangeHandler(evt, 'name')}
						type="text"
						value={data.name}
					/>
				</div>
				<div className="new-cost__control">
					<label>Сумма</label>
					<input
						onChange={evt => inputChangeHandler(evt, 'sum')}
						type="text"
						value={data.sum}
						min="0.01"
						step="0.01"
					/>
				</div>
				<div className="new-cost__control">
					<label>Дата</label>
					<input
						onChange={evt => inputChangeHandler(evt, 'date')}
						type="date"
						value={data.date}
						min="2022-01-01"
						max="2023-12-31"
					/>
				</div>
				<div className="new-cost__actions">
					<button type="submit">Добавить расход</button>
					<button type="button" onClick={() => onShowForm(false)}>
						Отмена
					</button>
				</div>
			</div>
		</form>
	);
};

export default CostForm;
