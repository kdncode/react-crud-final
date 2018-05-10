import React, { Component } from 'react';
import TaskItem from './TaskItem'

class TaskList extends Component {
  render() {
    var { tasks } = this.props;
    var elementTasks = tasks.map((task, index) => {
        return <TaskItem key={task.id} index />
    })

    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" className="form-control" />
                    </td>
                    <td>
                        <select className="form-control">
                            <option value="-1">All</option>
                            <option value="0">Offline</option>
                            <option value="1">Online</option>
                        </select>
                    </td>
                    <td></td>
                </tr>

                {/* TaskItem */}
                { elementTasks }

            </tbody>
        </table>
    );
  }
}

export default TaskList;
