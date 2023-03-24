import { Component } from "react";
class SearchBox extends Component{
    render() {
        return (
             <input
                className={this.props.search}
          type='search'
                placeholder={this.props.search}
          onChange={this.props.onChangeHandler}
        />
        )
    }
}
export default SearchBox;