// Import react and the property Component
import React, { Component } from 'react';

// define component (input with event handler)
class SearchBar extends Component {
  constructor (props){
    super(props);

    this.state = { term: ''};
  }

  render() {

    return (
      <div>
      <input
        value = {this.state.term}
        onChange = { (event) => this.setState ({ term: event.target.value}) } />
      </div>
    );
  }

}

export default SearchBar;
