import './employers-list.css';
import EmployersListItem from '../employers-list-item/employers-list-item';

const EmployersList = ({ data }) => {
  const elements = data.map((item) => {
    return <EmployersListItem {...item} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployersList;
