// import { FuncProps } from "./TrainingStatistics";

type ItemProps = {
  item: {
    id: string,
    date: string,
    distance: string
  },
  onRemove: (itemID: string) => void,
  onEdit: (itemID: string) => void
}

const StaticItem = (props: ItemProps): JSX.Element => {
  const {item, onRemove, onEdit} = props;
  const { id, date, distance } = item;

  return (
    <tr id={id} className='list-body__item'>
      <td className='list-body__item-date'>{date}</td>
      <td className='list-body__item-distance'>{distance}</td>
      <td className='list-body__item-actions item-actions'>
        <button className='item-actions__edit-btn' onClick={() => onEdit(id)}>✎</button>
        <button className='item-actions__delete-btn' onClick={() => onRemove(id)}>✘</button>
      </td>
    </tr>
  );
}

export default StaticItem;