import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';


const SearchInput = ({ onSubmit, loading }) => {
    const [capital_name, setCapitalName] = React.useState('');
    return(
            <form onSubmit={(event) => onSubmit(event, capital_name)} className="search-form">
                <input className={'search-form-input'} onChange={event => setCapitalName(event.target.value)}/>
                <button className={`search-form-btn ui primary button ${loading && 'loading'}`}>Submit</button>
            </form>
    )
};

SearchInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

export default SearchInput;
