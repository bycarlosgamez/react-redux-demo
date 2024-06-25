import { useSelector } from 'react-redux';

function GuitarValue() {
  const totalCost = useSelector(({ guitars: { data, searchTerm } }) => {
    const filteredCars = data.filter((guitar) => {
      return guitar.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return filteredCars.reduce((acc, guitar) => {
      return acc + guitar.cost;
    }, 0);
  });

  return <div className='guitar-value'>Total Cost: ${totalCost}</div>;
}

export default GuitarValue;
