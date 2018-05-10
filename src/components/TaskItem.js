import React, { Component } from 'react';

class TaskItem extends Component {
  render() {

    var {task} = this.props;
    
    return (
        <tr>
            <td>1</td>
            <td>Algo & DS</td>
            <td className="text-center">
                <span className="label label-success">
                    Online
                </span>
            </td>
            
            <td className="text-center">
                <button type="button" className="btn btn-warning">
                    <span className="fa fa-pencil mr-5"></span>Edit
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger">
                    <span className="fa fa-trash mr-5"></span>Delete
                </button>
            </td>
        </tr>
    );
  }
}

export default TaskItem;
