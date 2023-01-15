import { Component } from 'react';
import './employers-list-item.css';

class EmployersListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: this.props.increase,
      elected: this.props.elected,
    };
  }

  onIncrease = () => {
    this.setState(({ increase }) => ({ increase: !increase }));
  };

  toFavorites = () => {
    this.setState(({ elected }) => ({ elected: !elected }));
  };

  render() {
    const { name, salary, onDelete } = this.props;
    const { increase, elected } = this.state;

    return (
      <li className={`list-group-item d-flex justify-content-between ${elected ? 'like' : ''} ${increase ? 'increase' : ''}`}>
        <span className="list-group-item-label" onClick={this.toFavorites}>
          {name}
        </span>
        <input className="list-group-item-input" type="text" defaultValue={`${salary}$`} />
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-cookie btn-sm" type="button" onClick={this.onIncrease}>
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
