import { useSelector } from 'react-redux';

function GuitarList() {
  const guitars = useSelector((state) => {
    return state.guitars.data;
  });

  console.log(guitars);

  return <div>GuitarList</div>;
}

export default GuitarList;
