import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Item, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class City extends Component {
    render() {
        const {city} = this.props;
        return (
            <Item>
                <Item.Header>{city.name}</Item.Header>
                <Item.Extra>Испольнителей {city.executors.length}</Item.Extra>
            </Item>
        );
    }
}
City.propTypes = {
    city: PropTypes.object
};
export default City;
