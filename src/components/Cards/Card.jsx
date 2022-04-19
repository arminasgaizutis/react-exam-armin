import css from './Card.module.css';

function Card(props) {
  return (
    <div className={css.card}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
