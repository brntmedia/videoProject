import React from 'react'

class SearchBar extends React.Component {
    state={searchTerm:''}

    callBackMethod=()=>{

    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form className='ui form'>
                    <div className='field'>
                        <label>Video Search</label>
                        <input
                            type="text" 
                            value={this.state.term}
                            onChange={this.callBackMethod}
                             
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;