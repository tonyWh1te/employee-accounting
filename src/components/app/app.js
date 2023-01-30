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
      term: '',
      filter: 'none',
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
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

  onToggleProp = (id, prop, keyCode) => {
    // this.setState(({ data }) => {
    //   const index = data.findIndex((elem) => elem.id === id);
    //   const old = data[index];
    //   const newItem = { ...old, increase: !old.increase };
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //   return { data: newArr };
    // });

    // или
    if (typeof keyCode === 'undefined' || keyCode === 13 || keyCode === 32) {
      this.setState(({ data }) => ({
        data: data.map((item) => {
          if (item.id === id) {
            return { ...item, [prop]: !item[prop] };
          }
          return item;
        }),
      }));
    }
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterEmp = (items, filter) => {
    switch (filter) {
      case 'salary':
        return items.filter((item) => item.salary > 1000);
      case 'rise':
        return items.filter((item) => item.elected);
      default:
        return items;
    }
  };

  onUpdateFilter = (filter) => {
    this.setState({ filter });
  };

  onUpdateSalary = (name, salary) => {
    this.setState(({ data }) => {
      return {
        data: data.map((item) => {
          return item.name === name
            ? {
                ...item,
                salary: +salary,
              }
            : item;
        }),
      };
    });
  };

  render() {
    const { data, term, filter } = this.state;
    const amountToIncrease = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.searchEmp(data, term);
    const updatedData = this.filterEmp(visibleData, filter);

    return (
      <div className="app">
        <AppInfo employees={this.state.data.length} amountToIncrease={amountToIncrease} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onUpdateFilter={this.onUpdateFilter} filter={filter} />
        </div>
        <EmployersList data={updatedData} onDelete={this.deleteItem} onToggleProp={this.onToggleProp} onUpdateSalary={this.onUpdateSalary} />
        <EmployerAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
