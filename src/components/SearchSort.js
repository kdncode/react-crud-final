import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class SearchSort extends Component {
  render() {
    return (
        <div>
            {/* Search */}
            <Search/>

            {/* Sort */}
            <Sort/>
        </div>
    );
  }
}

export default SearchSort;
