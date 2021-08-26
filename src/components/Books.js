import React, { Component } from "react";
import SearchBox from "./SearchBox";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
      <div>
        <SearchBox handleSearch={this.handleSearch} />
      </div>
    );
  }
}

export default Books;
