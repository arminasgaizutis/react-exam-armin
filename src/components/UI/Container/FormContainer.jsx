import css from './FormContainer.module.css';

function FormContainer(props) {
  return (
    <>
      <fieldset className={`${css.formContainer} ${props.className}`}>
        {props.children}
      </fieldset>
    </>
  );
}

export default FormContainer;
