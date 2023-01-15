import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployerAddForm from '../employers-add-form/employers-add-form';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Alex W.', salary: 800, increase: false, elected: false, id: uuidv4() },
        { name: 'Bob M.', salary: 3000, increase: true, elected: false, id: uuidv4() },
        { name: 'John S.', salary: 5000, increase: false, elected: false, id: uuidv4() },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: [...data].filter((item) => item.id !== id),
      };
    });
  };

  addItem = ({ name, salary }) => {
    const newItem = {
      name: name,
      salary: salary,
      increase: false,
      elected: false,
      id: uuidv4(),
    };

    this.setState(({ data }) => ({ data: [...data, newItem] }));
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployersList data={this.state.data} onDelete={this.deleteItem} />
        <EmployerAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
