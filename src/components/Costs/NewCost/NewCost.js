import { useState } from 'react';
import CostForm from './CostForm';
import './NewCost.css';
import ShowFormBtn from './ShowFormBtn';

const NewCost = ({ onAddCost }) => {
	const [isShowForm, setIsShowForm] = useState(false);

	const showFormHandler = boolean => setIsShowForm(boolean);

	return (
		<div className="new-cost">
			{!isShowForm ? (
				<ShowFormBtn onShowForm={showFormHandler} />
			) : (
				<CostForm onAddCost={onAddCost} onShowForm={showFormHandler} />
			)}
		</div>
	);
};

export default NewCost;
