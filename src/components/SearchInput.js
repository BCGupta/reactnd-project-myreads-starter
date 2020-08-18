import React, { Component } from "react";

class SearchInput extends Component {
    state = {
        value: '',
    };
    handleChange = event => {
        const v = event.target.value;
        this.setState({value: v }, () => {
            this.props.onSearch(v);
        });
    };
    render() {
        return (
            <div className="search-books-input-wrapper">
                <input type="text"
                       value={this.state.value}
                       placeholder="Search by title or author"
                       onChange={this.handleChange}
                       autoFocus
                />
            </div>
        );
    }
}

export default SearchInput;