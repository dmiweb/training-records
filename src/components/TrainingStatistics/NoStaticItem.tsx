const NoStaticItem = (): JSX.Element => {
  return (
    <tr className='list-body__item'>
      <td className='list-body__no-item' colSpan={3}>Нет записей тренировок...</td>
    </tr>
  );
}

export default NoStaticItem;