import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { capitalNameSubmit } from "state/reducers/country/actions";
import SearchInput from 'views/components/SearchInput';
import './index.scss';
import CapitalList from "../CapitalList";
import CountryDetail from 'views/components/CountryDetail';
import Country from "../../../models/Country";

class BaseContainer extends React.Component {
    state = {
        loading:false
    };
    onSubmit = (event, name) => {
        event.preventDefault();
        this.setState({ loading: true });
        new Promise((resolve, reject) => {
            this.props.capitalNameSubmit({resolve, reject}, name);
        }).then(() =>this.setState({ loading: false })).catch(() => {
            this.setState({ loading: false });
        })
    };
    render() {
        const { selectedCountry } = this.props;
        return(
            <main className={'base-container'}>
                <SearchInput onSubmit={this.onSubmit} loading={this.state.loading}/>
                <div className="country-capitals-container">
                    <CapitalList/>
                    { selectedCountry.loaded && <CountryDetail country_detail={selectedCountry}/> }
                </div>
            </main>
        )
    }
}

BaseContainer.propTypes = {
    selectedCountry: PropTypes.instanceOf(Country)
};

const mapStateToProps = state => ({
    selectedCountry: state.countries.selected_country
});

export default connect(mapStateToProps, { capitalNameSubmit })(BaseContainer);
