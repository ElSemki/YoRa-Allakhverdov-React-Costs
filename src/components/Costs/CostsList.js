import CostItem from './CostItem';

const CostsList = ({ costs }) => {
	return (
		<div>
			{!costs.length ? (
				<h1 className="costs__fallback">В Этом Году Расходов Нет</h1>
			) : (
				costs.map(cost => <CostItem {...cost} key={cost.id} />)
			)}
		</div>
	);
};

export default CostsList;
