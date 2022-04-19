import css from './Button.module.css';

function Button(props) {
  return <button className={css.btn}>{props.children}</button>;
}

export default Button;
