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

    render() {
        const {name, salaty} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           onChange={this.onValueChange}
                           name ='name'
                           value={name}
                    />
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           onChange={this.onValueChange}
                           name = 'salary'
                           value={salaty}
                    />

                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
                <div>my name is {this.state.name} salary is {this.state.salary}</div>
            </div>
        )
    }


}

export default EmployeesAddForm;