import React, { Component } from 'react';

class Sort extends Component {
  render() {
    return ( 
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Filter <span className="fa fa-caret-square-o-down ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                        <a role="button">
                                    <span className="fa fa-sort-alpha-asc pr-5">
                                        Name A-Z
                                    </span>
                                </a>
                    </li>
                    <li>
                        <a role="button">
                                    <span className="fa fa-sort-alpha-desc pr-5">
                                        Name Z-A
                                    </span>
                                </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li><a role="button">Online</a></li>
                    <li><a role="button">Offline</a></li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Sort;
