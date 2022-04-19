function FormInput(props) {
  const { placeholder, type = 'text', name, value, onChange } = props;

  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default FormInput;
