import React, { Component } from 'react';

class TaskForm extends Component {
  
  constructor(props){
      super(props);
      
      this.state = ({
            name: '',
            status: false
      })
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onChange = (event) => {    
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
        [name] : value
    })
  }

  render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Add task 
                        <span
                            className="fa fa-times-circle text-right"
                            onClick={ this.onCloseForm }
                        ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" 
                                   className="form-control"
                                   name="name"
                                   value={this.state.name} 
                                   onChange={this.onChange}/>
                        </div>
                        <label>Status:</label>
                        <select className="form-control" 
                                required="required"
                                name="status"
                                value={this.state.status} 
                                onChange={this.onChange}>
                            <option value={true}>Online</option>
                            <option value={false}>Offline</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Add</button>&nbsp;
                            <button type="submit" className="btn btn-danger">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default TaskForm;
