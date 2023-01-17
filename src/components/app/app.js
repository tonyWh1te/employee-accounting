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

  onToggleProp = (id, prop) => {
    // this.setState(({ data }) => {
    //   const index = data.findIndex((elem) => elem.id === id);
    //   const old = data[index];
    //   const newItem = { ...old, increase: !old.increase };
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //   return { data: newArr };
    // });

    // или
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
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

  render() {
    const { data, term } = this.state;
    const amountToIncrease = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.searchEmp(data, term);

    return (
      <div className="app">
        <AppInfo employees={this.state.data.length} amountToIncrease={amountToIncrease} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter />
        </div>
        <EmployersList data={visibleData} onDelete={this.deleteItem} onToggleProp={this.onToggleProp} />
        <EmployerAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
