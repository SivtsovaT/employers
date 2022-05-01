import React, {Component} from "react";
import './employees-add-form.css';

class EmployeesAddForm  extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0
        }
    }

    //метод, чтобы вводить значения
    onValueChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    // for adding

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salaty} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>

                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           onChange={this.onValueChange}
                           name ='name'
                           value={name}
                           minLength={3}
                           required='required'
                    />
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           onChange={this.onValueChange}
                           name = 'salary'
                           value={salaty}
                           min={0}
                           required='required'
                    />

                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>

            </div>
        )
    }


}

export default EmployeesAddForm;