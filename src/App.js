import React, { Component } from 'react';
import './App.css';
import AppInfo from "./components/app-info/app-info";
import SearchPanel from "./components/search-panel/search-panel";
import AppFilter from "./components/app-filter/app-filter";
import EmployeesList from "./components/employees-list/employees-list";
import EmployeesAddForm from "./components/employees-add-form/employees-add-form";

const App = () => {
    const data = [
        {name: 'John C.', salary: 800, increase: false},
        {name: 'Alex M.', salary: 3000, increase: true},
        {name: 'Carl W.', salary: 5000, increase: false}
    ];

    return (
        <div className='app'>
            <AppInfo/>
            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )

}

export default App;
