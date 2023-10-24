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

	const inputChangeHandler = evt =>
		setData({ ...data, [evt.target.name]: evt.target.value });

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="new-cost__controls">
				<div className="new-cost__control">
					<label htmlFor="name">Название</label>
					<input
						onChange={inputChangeHandler}
						id="name"
						type="text"
						name="name"
						value={data.name}
						required
					/>
				</div>
				<div className="new-cost__control">
					<label htmlFor="sum">Сумма</label>
					<input
						onChange={inputChangeHandler}
						id="sum"
						type="text"
						name="sum"
						value={data.sum}
						min="0.01"
						step="0.01"
						required
					/>
				</div>
				<div className="new-cost__control">
					<label htmlFor="date">Дата</label>
					<input
						onChange={inputChangeHandler}
						id="date"
						type="date"
						name="date"
						value={data.date}
						min="2022-01-01"
						max="2023-12-31"
						required
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
