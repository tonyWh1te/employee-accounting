import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployerAddForm from '../employers-add-form/employers-add-form';
import './app.css';

function App() {
  const data = [
    { name: 'Alex W.', salary: 800, increase: false, elected: false, id: 1 },
    { name: 'Bob M.', salary: 3000, increase: true, elected: false, id: 2 },
    { name: 'John S.', salary: 5000, increase: false, elected: false, id: 3 },
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployersList data={data} />
      <EmployerAddForm />
    </div>
  );
}

export default App;
