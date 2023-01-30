import { Component } from 'react';
import './employers-list-item.css';

class EmployersListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.salary,
    };
  }

  onValueChange = (e) => {
    const value = e.target.value.slice(0, -1);

    if (/^\d+$/.test(value)) {
      this.setState({ value });
      this.props.onUpdateSalary(this.props.name, value);
    }
  };

  render() {
    const { name, onDelete, onToggleProp, increase, elected } = this.props;
    const { value } = this.state;

    return (
      <li className={`list-group-item d-flex justify-content-between ${elected ? 'like' : ''} ${increase ? 'increase' : ''}`}>
        <span className="list-group-item-label" tabIndex={0} data-toggle="elected" onClick={onToggleProp} onKeyDown={onToggleProp}>
          {name}
        </span>
        <input className="list-group-item-input" type="text" value={`${value}$`} onChange={this.onValueChange} />
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-cookie btn-sm" type="button" data-toggle="increase" onClick={onToggleProp}>
            <i className="fas fa-cookie"></i>
          </button>

          <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployersListItem;
