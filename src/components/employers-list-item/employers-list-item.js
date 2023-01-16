import './employers-list-item.css';

const EmployersListItem = (props) => {
  const { name, salary, onDelete, onToggleProp, increase, elected } = props;

  return (
    <li className={`list-group-item d-flex justify-content-between ${elected ? 'like' : ''} ${increase ? 'increase' : ''}`}>
      <span className="list-group-item-label" data-toggle="elected" onClick={onToggleProp}>
        {name}
      </span>
      <input className="list-group-item-input" type="text" defaultValue={`${salary}$`} />
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
};

export default EmployersListItem;
