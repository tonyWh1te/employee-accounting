import './app-filter.css';

function AppFilter(props) {
  const { onUpdateFilter, filter } = props;
  const buttonsData = [
    { name: 'none', label: 'Все сотрудники' },
    { name: 'rise', label: 'На повышение' },
    { name: 'salary', label: 'З/П больше 1000$' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = name === filter;
    return (
      <button className={`btn ${active ? 'btn-light' : 'btn-outline-light'}`} key={label} type="button" onClick={() => onUpdateFilter(name)}>
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
}

export default AppFilter;
