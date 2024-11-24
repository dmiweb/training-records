import StaticItem from "./StaticItem";
import NoStaticItem from "./NoStaticItem";
import { TrainingStatisticsProps } from "./TrainingStatistics";

const StaticList = (props: TrainingStatisticsProps): JSX.Element => {
  const { items, onRemove, onEdit } = props;

  return (
    <table className='static__list'>
      <thead className='static__list-headers'>
        <tr>
          <th className='static__list-headers-title'>Дата (ДД.ММ.ГГГ)</th>
          <th className='static__list-headers-title'>Пройдено км</th>
          <th className='static__list-headers-title'>Действия</th>
        </tr>
      </thead>
      <tbody className='static__list-body list-body'>
        {!items.length ? <NoStaticItem /> :
          items.map((item) =>
            <StaticItem
              key={item.id}
              item={item}
              onRemove={onRemove}
              onEdit={onEdit}
            />)}
      </tbody>
    </table>
  );
}

export default StaticList;