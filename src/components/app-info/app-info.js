import './app-info.css';

const AppInfo = ({ employees, amountToIncrease }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании Microsoft</h1>
      <h3>Общее число сотрудников: {employees}</h3>
      <h3>Премию получат: {amountToIncrease}</h3>
    </div>
  );
};

export default AppInfo;
