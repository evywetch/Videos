import React from 'react';
/*
=> Defined as a class component coz we want to get access to the "state" system
 NOTE: Access the props in React class conponent has to access via "this.props"


*/

class SearchBar extends React.Component {
  state = { term: '' };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term); // 💥💥💥💥💥💥 how to access props in class component!!
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
