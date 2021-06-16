import React from 'react';

export default class SearchBar extends React.Component {

    state = { text: ''};

    onInputChange = (event) => {
        this.setState({text: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSearchSubmit(this.state.text);
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.text} 
                            onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}