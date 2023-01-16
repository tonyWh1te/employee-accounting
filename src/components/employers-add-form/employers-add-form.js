import { Component } from 'react';
import './employers-add-form.css';

class EmployerAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
      danger: false,
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, salary } = this.state;

    if (name.length < 3 || !salary) {
      this.setState({ danger: true });
      return;
    }

    this.props.onAdd({
      name: name,
      salary: salary,
    });

    this.setState({
      name: '',
      salary: '',
      danger: false,
    });
  };

  render() {
    const { name, salary, danger } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          {/* сделали инпуты управляемыми компонентами за счет добавления атрибута value. Теперь реакт не только меняет сосотояние, но и отслеживает значение формы */}
          <input
            className={`form-control new-post-label ${danger ? 'danger' : ''}`}
            type="text"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            className={`form-control new-post-label ${danger ? 'danger' : ''}`}
            type="number"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployerAddForm;
