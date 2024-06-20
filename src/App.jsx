import GuitarForm from './components/GuitarForm';
import GuitarList from './components/GuitarList';
import GuitarSearch from './components/GuitarSearch';
import GuitarValue from './components/GuitarValue';

function App() {
  return (
    <div className='container is-fluid'>
      <GuitarForm />
      <GuitarSearch />
      <GuitarList />
      <GuitarValue />
    </div>
  );
}

export default App;
