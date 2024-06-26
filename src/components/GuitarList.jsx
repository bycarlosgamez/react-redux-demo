import { useSelector, useDispatch } from 'react-redux';
import { removeGuitar } from '../store';

function GuitarList() {
  const dispatch = useDispatch();
  const { guitars, name } = useSelector(
    ({ form, guitars: { data, searchTerm } }) => {
      const filteredGuitars = data.filter((guitar) =>
        guitar.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        guitars: filteredGuitars,
        name: form.name,
      };
    }
  );

  const hanldeGuitarDelete = (guitar) => {
    dispatch(removeGuitar(guitar.id));
  };

  const renderedGuitars = guitars.map((guitar) => {
    const bold = name && guitar.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={guitar.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {guitar.name} - ${guitar.cost}
        </p>
        <button
          className='button is-danger'
          onClick={() => hanldeGuitarDelete(guitar)}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className='guitar-list'>
      {renderedGuitars} <hr />
    </div>
  );
}

export default GuitarList;
