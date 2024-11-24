type InputProps = {
  editItem: {
    id: string,
    date: string,
    distance: string,
    edit?: boolean
  }
};

const InputDistance = ({editItem}: InputProps): JSX.Element => {
  return (
    <label className='form__input-container'>
      <span className='form__input-title'>Пройдено км</span>
      <input type="text" 
      className='form__input-distance form__input' 
      name='distance' 
      defaultValue={editItem.distance !== "" ? editItem.distance : ""}
      required />
    </label>
  );
}

export default InputDistance;