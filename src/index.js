import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';  // search_bar.js  (.js doesn't have to be written)

const API_KEY = "";

// Create a new component.  This component shoud produce 
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));