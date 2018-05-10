import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import SearchSort from './components/SearchSort';
import TaskList from './components/TaskList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks : [], //id: unique, name, stt
            isDisplayForm: false
        }
    }

    //Lifecycle
    componentWillMount() {
        if(localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'))
            this.setState({
                tasks : tasks
            });
        }
    }

    onGenerateData = () => {
        var tasks = [
            {
                id: this.generateID(),
                name: 'Angular',
                status: true
            },
            {
                id: this.generateID(),
                name: 'React',
                status: false
            }
        ];

        // Save to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    s4() {
        return Math.floor( ( 1 + Math.random() ) * 0x10000 ).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4();
    }

    onToggleForm = () => {
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        })
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm : false
        })
    }

    render() {
        var { tasks, isDisplayForm }  = this.state; // var tasks = this.state.tasks
        var elementTaskForm = isDisplayForm ? <TaskForm onCloseForm={ this.onCloseForm } /> : '';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>CRUD App</h1>
                    <img src={logo} alt="logo" className="App-logo" /> <br /> <br />
                </div>

                <div className="row">    
                    <div className={ isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
                                                    : ""}>
                        {/* TaskForm */}
                        { elementTaskForm }
                    </div>

                    <div className={ isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : 
                                                     "col-xs-12 col-sm-12 col-md-12 col-lg-12" }>
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={ this.onToggleForm }>
                            <span className="fa fa-plus mr-5"></span>Add task
                        </button> 

                        {/* TESTING */}
                        <button type="button" className="btn btn-success"
                            onClick={ this.onGenerateData }
                            >Generate Data
                        </button> 

                        <div className="row mt-15">
                            {/* SearchSort */}
                            <SearchSort />
                        </div>

                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {/* TaskList */}
                                <TaskList tasks= { tasks } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
