import './Card.css';

const Card = props => {
	const CLASSES = 'card ' + props.className;
	return <div className={CLASSES}>{props.children}</div>;
};

export default Card;
