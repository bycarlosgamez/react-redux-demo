import { useSelector, useDispatch } from 'react-redux';
import { removeGuitar } from '../store';

function GuitarList() {
  const dispatch = useDispatch();
  const guitars = useSelector(({ guitars: { data, searchTerm } }) => {
    return data.filter((guitar) => {
      return guitar.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const hanldeGuitarDelete = (guitar) => {
    dispatch(removeGuitar(guitar.id));
  };

  const renderedGuitars = guitars.map((guitar) => {
    return (
      <div key={guitar.id} className='panel'>
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
