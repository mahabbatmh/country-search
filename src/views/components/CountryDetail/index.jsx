import React from 'react';
import { Card, Image } from "semantic-ui-react";
import './index.scss';
import PropTypes from 'prop-types';
import Country from "../../../models/Country";

const CountryDetail = ({ country_detail }) => (
    <Card className={'country-detail'}>
        <Image src={country_detail.flag} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{country_detail.name}</Card.Header>
            <Card.Meta>{country_detail.region}</Card.Meta>
            <Card.Description>
               Population: { country_detail.population } <br/>
               Currency: { country_detail.currencies[0].code}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            Neighbors: { country_detail.borders.join(', ') }
        </Card.Content>
    </Card>
);

CountryDetail.propTypes = {
    country_detail: PropTypes.instanceOf(Country).isRequired
};

export default CountryDetail;
