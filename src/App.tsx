import './App.css'
import { useState } from 'react'
import FormEntryTraining from './components/FormEntryTraining/FormEntryTraining';
import TrainingStatistics from './components/TrainingStatistics/TrainingStatistics';

export type Items = {
  id: string,
  date: string,
  distance: string,
}

function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [editItem, setEditItem] = useState({ id: '', date: '', distance: '', edit: true })

  const handleAdd = (item: Items): void => {
    const isSameDates: boolean = items.some(o => o.date === item.date);
    const isSameId: boolean = items.some(o => o.id === item.id);

    console.log('date - ' + isSameDates)
    console.log('date - ' + isSameId)

    if (items.length && isSameDates && !isSameId) {
      let prevDistance;

      const filterSameItems = items.filter(currentItem => {
        if (currentItem.date === item.date) prevDistance = currentItem.distance;
        return currentItem.date !== item.date;
      })

      const updateItem = {
        id: item.id,
        date: item.date,
        distance: String(Number(item.distance) + Number(prevDistance))
      }
      const updateItems = sortItemsByDate(filterSameItems, updateItem);

      setItems(updateItems);
    } else if (items.length && isSameId && !isSameDates) {
      const filterSameItems = items.filter(o => o.id !== item.id);

      const updateItem = {
        id: item.id,
        date: item.date,
        distance: item.distance
      }

      const updateItems = sortItemsByDate(filterSameItems, updateItem);

      setItems(updateItems);
    } else if (isSameId && isSameDates) {
      const filterSameId = items.filter(o => o.id !== item.id);
      const filterSameDate = filterSameId.filter(o => o.date !== item.date);

      const updateItem = {
        id: item.id,
        date: item.date,
        distance: item.distance
      }

      const updateItems = sortItemsByDate(filterSameDate, updateItem);

      setItems(updateItems);
    } else {
      const updateItems = sortItemsByDate(items, item);
      setItems(updateItems)
    }

    function sortItemsByDate(items: Items[], item: Items): Items[] {
      return [...items, item].sort(function (a, b) {
        return (
          +new Date(b.date.split(".").reverse().join("."))
          -
          +new Date(a.date.split(".").reverse().join("."))
        );
      });
    }
  }

  const handleRemove = (itemID: string): void => {
    setItems(prevItems => prevItems.filter(o => o.id !== itemID));
  }

  const handleEdit = (itemID: string): void => {
    const item = items.filter(item => item.id === itemID);
    setEditItem({ ...item[0], edit: true })
  }

  return (
    <div className='training-records'>
      <FormEntryTraining onAdd={handleAdd} editItem={editItem} />
      <TrainingStatistics items={items} onRemove={handleRemove} onEdit={handleEdit} />
    </div>
  )
}

export default App;
