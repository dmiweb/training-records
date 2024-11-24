import StaticList from "./StaticList";

export type TrainingStatisticsProps = {
  items: {
    id: string,
    date: string,
    distance: string,
  }[],
  onRemove: (itemID: string) => void,
  onEdit: (itemID: string) => void
};

const TrainingStatistics = (props: TrainingStatisticsProps): JSX.Element => {
  const {items, onRemove, onEdit} = props;

  return (
    <div className='training-records__static static'>
      <StaticList items={items} onRemove={onRemove} onEdit={onEdit}/>
    </div>
  );
}

export default TrainingStatistics;