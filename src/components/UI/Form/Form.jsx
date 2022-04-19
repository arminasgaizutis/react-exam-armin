import Button from '../Button/Button';

function Form(props) {
  return (
    <>
      <h2>{props.children}</h2>
      <fieldset>
        <form onSubmit={props.onSubmit}>
          <input type='email' placeholder='Email address' />
          <br />
          <input type='password' placeholder='Password' />
          <br />
          <Button>Submit</Button>
        </form>
      </fieldset>
    </>
  );
}

export default Form;
