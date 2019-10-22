import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeSelectedCountry, removeCountry } from "state/reducers/country/actions";
import './index.scss';

class CapitalList extends React.Component {
    changeCountry = (event, name) => {
        let iconClick = event.target.classList.contains('capital-remove');
        if(!iconClick)
            this.props.changeSelectedCountry(name);
    }
    render(){
        const {selectedCountry, removeCountry } = this.props;
        return(
            <section className={'capital-list'}>
                {
                    this.props.capitals.map((capital, index) => {
                        return(
                            <div
                                key={index}
                                onClick={(event) => this.changeCountry(event, capital)}
                                className={`capital ${selectedCountry.capital === capital && 'active'}`}
                            >
                                <p className={'capital-name'}>{capital}</p>
                                <p onClick={() => removeCountry(capital)} className={'capital-remove'}>x</p>
                            </div>
                        )
                })
                }
            </section>
        )
    }
}

CapitalList.propTypes = {
    capitals: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = state => ({
    capitals: state.countries.capitals,
    selectedCountry: state.countries.selected_country
});

export default connect(mapStateToProps, { changeSelectedCountry, removeCountry })(CapitalList);
