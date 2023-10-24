import { useState } from 'react';
import Costs from './components/Costs/Costs';
import NewCost from './components/Costs/NewCost/NewCost';

const INITIAL_COSTS = [
	{
		id: String(Date.now() + Math.floor(Math.random() * 1000)),
		date: new Date('2023-07-09'),
		description: 'MacBook Саше',
		amount: 1000,
	},
	{
		id: String(Date.now() + Math.floor(Math.random() * 1000)),
		date: new Date('2023-05-06'),
		description: 'iPhone Вике',
		amount: 500,
	},
	{
		id: String(Date.now() + Math.floor(Math.random() * 1000)),
		date: new Date('2022-12-20'),
		description: 'Подарки на НГ',
		amount: 400,
	},
	{
		id: String(Date.now() + Math.floor(Math.random() * 1000)),
		date: new Date('2022-11-9'),
		description: 'Бабушке ДР',
		amount: 342,
	},
	{
		id: Date.now().toString(),
		date: new Date('2022-10-21'),
		description: 'iPad 11 Диме в подарок',
		amount: 1200,
	},
];

const App = () => {
	const [costs, setCosts] = useState(INITIAL_COSTS);
	const [selectedYear, setSelectedYear] = useState('2023');

	const addCostHandler = cost => setCosts([cost, ...costs]);
	const changeYearHandler = year => setSelectedYear(year);

	const printCosts = costs
		.slice()
		.sort((a, b) => b.date.getMonth() - a.date.getMonth())
		.filter(cost => cost.date.getFullYear().toString() === selectedYear);

	return (
		<div>
			<NewCost onAddCost={addCostHandler} />
			<Costs
				costs={printCosts}
				year={selectedYear}
				onChangeYear={changeYearHandler}
			/>
		</div>
	);
};

export default App;
