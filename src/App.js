import React, { Component } from 'react';
import './App.css';
import AppInfo from "./components/app-info/app-info";
import SearchPanel from "./components/search-panel/search-panel";
import AppFilter from "./components/app-filter/app-filter";
import EmployeesList from "./components/employees-list/employees-list";
import EmployeesAddForm from "./components/employees-add-form/employees-add-form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, rise: false, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, rise: false,id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false,id: 3}
            ]
        }
        this.maxId = 4;
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            //1 variant
            //const index = data.findIndex(elem => elem.id === id);
            /* const before = data.slice(0, index);
              const after = data.slice(index + 1);
              const newArr = [...before, ...after];*/

            //2 variant



            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    addItem = (name,salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleIncrease = (id) => {
       console.log(`Increase this ${id}`);
    }
    onToggleRise = (id) => {
        console.log(`Rise this ${id}`)
    }

    render() {


        return (
            <div className='app'>
                <AppInfo/>
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}

                />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )

    }


}

export default App;
