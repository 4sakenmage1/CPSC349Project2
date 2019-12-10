/* jshint esversion: 6*/

import React, {Component} from 'react';


class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  }

  render () {
    return (
      <div>
        <form>
          <select onChange={(event) => this.handleSubmit(event)} multiple>
            <option value="1">$ </option>
            <option value="2">$$ </option>
            <option value="3">$$$ </option>
            <option value="4">$$$$ </option>
          </select>
          <button type="submit">Submit </button>
        </form>
      </div>
    )
  }
}

export default SearchForm;
