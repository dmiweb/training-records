type InputProps = {
  editItem: {
    id: string,
    date: string,
    distance: string,
    edit?: boolean
  }
};

const InputDate = ({editItem}: InputProps): JSX.Element => {
  return (
    <label className="form__input-container">
      <span className="form__input-title">Дата (ДД.ММ.ГГГГ)</span>
      <input
        type="text"
        className="form__input-date form__input"
        name="date"
        defaultValue={editItem.date !== "" ? editItem.date : ""}
        required />
    </label>
  );
}

export default InputDate;