import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import SearchSort from './components/SearchSort';
import TaskList from './components/TaskList';

class App extends Component {
  render() {
    return (
	<div className="container">
        <div className="text-center">
            <h1>CRUD App</h1>
			<img src={logo} alt="logo" className="App-logo" /> <br /> <br />
        </div>

        <div className="row">    
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                {/* TaskForm */}
                <TaskForm />
            </div>

            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <button type="button" className="btn btn-primary">
                    <span className="fa fa-plus mr-5"></span>Add task
                </button> 

                <div className="row mt-15">
                    {/* SearchSort */}
                    <SearchSort />
                </div>

                <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {/* TaskList */}
                        <TaskList/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
