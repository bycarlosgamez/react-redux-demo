import { useSelector } from 'react-redux';

function GuitarList() {
  const guitars = useSelector((state) => {
    return state.guitars.data;
  });

  const hanldeGuitarDelete = (guitar) => {};

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
    <div className='card-list'>
      {renderedGuitars} <hr />
    </div>
  );
}

export default GuitarList;
