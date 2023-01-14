import { Component } from 'react';
import './employers-add-form.css';

class EmployerAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          {/* сделали инпуты управляемыми компонентами за счет добавления атрибута value. Теперь реакт не только меняет сосотояние, но и отслеживает значение формы */}
          <input
            className="form-control new-post-label"
            type="text"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            className="form-control new-post-label"
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
