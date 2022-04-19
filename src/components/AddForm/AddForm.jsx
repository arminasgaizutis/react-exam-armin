import Button from '../UI/Button/Button';

function AddForm(props) {
  return (
    <>
      <h2>{props.children}</h2>
      <fieldset>
        <form>
          <input type='text' placeholder='Title' />
          <br />
          <textarea placeholder='Description'></textarea>
          <br />
          <Button>Add</Button>
        </form>
      </fieldset>
    </>
  );
}

export default AddForm;
