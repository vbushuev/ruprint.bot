import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Segment, Button, Menu, Image, Icon, Header,Item, Divider } from 'semantic-ui-react'

import City from '../components/City';
import Add from '../components/Forms/City/Add';

class Cities extends Component {
    constructor(props){
        super(props);
    }
    state = { adding: false };
    componentDidMount(){
        this.props.actions.fetchCitiesIfNeeded()
    }
    render() {
        const {cities, actions} = this.props;
        return (
            <Container>
                <Header>Города</Header>
                <Button icon primary onClick={ (e) => this.setState({ adding:!this.state.adding }) }>
                    <Icon name={this.state.adding?"angle up":"plus"}/>
                </Button>
                {this.state.adding?<Add handleSubmit={actions.createCity}/>:''}
                <Divider horizontal>Список</Divider>
                <Item.Group divided>
                    { cities.data.map( (row,i) => {return <City key={i} city={row} handleUpdate={actions.updateCity} handleDelete={actions.deleteCity}/>}) }
                </Item.Group>
            </Container>
        );
    }
}
Cities.propTypes = {
    cities: PropTypes.object,
    actions: PropTypes.object
}
export default connect((state)=>{
    return {
        cities: state.cities
    };
})(Cities);
