import { useState, useEffect } from 'react';
import InputDate from "./InputDate";
import InputDistance from "./InputDistance";
import SendButton from "./SendButton";
import { v4 as uuidv4 } from 'uuid';

type FormData = {
  id: string,
  date: string,
  distance: string
}

type FormProps = {
  onAdd: (item: FormData) => void,
  editItem: {
    id: string,
    date: string,
    distance: string,
    edit?: boolean
  }
}

const FormEntryTraining = (props: FormProps): JSX.Element => {
  const { onAdd, editItem } = props;

  const [item, setItem] = useState(editItem);

  useEffect(() => { setItem(editItem) }, [editItem]);

  const handleForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    const newItem: {[k: string]: FormDataEntryValue} = Object.fromEntries(formData);

    let{date, distance} = newItem;
    date = String(date);
    distance = String(distance);
    
    const id = editItem.edit && item.id;
    const itemUpdate = { id: id || uuidv4(), date, distance};

    onAdd(itemUpdate);

    setItem({id: '', date: '', distance: '', edit: true})
    currentTarget.reset();
  }

  return (
    <form className='training-records__form form' onSubmit={handleForm}>
      <InputDate editItem={item} />
      <InputDistance editItem={item} />
      <SendButton />
    </form>
  );
}

export default FormEntryTraining;