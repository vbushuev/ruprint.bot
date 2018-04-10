import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import { Container, Segment, Button, Menu, Image, Icon, Header,Item } from 'semantic-ui-react'

import City from '../components/City';


class Cities extends Component {
    constructor(props){
        super(props);
        // this.loadCities();
    }
    loadCities = () => {
        this.props.getCities();
    }
    render() {
        const {cities, getCities} = this.props;
        return (
            <Container>
                <Header as='h3'>Города</Header>
                <Button onClick={getCities}>load</Button>
                <Item.Group>
                    { cities.data.map( (row,i) => {return <City key={i} city={row}/>}) }
                </Item.Group>
            </Container>
        );
    }
}
Cities.propTypes = {
    cities: PropTypes.object,
    getCities: PropTypes.func
}
export default connect((state)=>{
    return {
        cities: state.cities
    };
})(Cities);
