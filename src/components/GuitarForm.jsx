import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addGuitar } from '../store';

function GuitarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    const guitarCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(guitarCost));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addGuitar({
        name,
        cost,
      })
    );
  };

  return (
    <div className='guitar-form panel'>
      <h4 className='subtitle is-3'>Add Guitar</h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
          <div className='field'>
            <label className='label'>Name</label>
            <input
              type='text'
              className='input is-expanded'
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className='field'>
            <label className='label'>Cost</label>
            <input
              type='number'
              className='input is-expanded'
              value={cost || ''}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className='field'>
          <button className='button is-link'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default GuitarForm;
