import Card from '../UI/Card';
import './Costs.css';
import CostsDiagram from './CostsDiagram';
import CostsFilter from './CostsFilter';
import CostsList from './CostsList';

const Costs = ({ costs, year, onChangeYear }) => {
	return (
		<Card className="costs">
			<CostsFilter onChangeYear={onChangeYear} year={year} />
			<CostsDiagram costs={costs} />
			<CostsList costs={costs} />
		</Card>
	);
};

export default Costs;
