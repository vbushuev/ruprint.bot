import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { Container, Segment, Button, Menu, Image, Icon, Header,Item } from 'semantic-ui-react'

import Executor from '../components/Executor';

class Executors extends Component {


    render() {
        const executors  = this.props.executors.data;
        return (
            <Container>
                <Header as='h3'>Исполнители</Header>
                <Item.Group>
                    { executors.map( ex => {return <Executor data={ex}/>}) }
                </Item.Group>
            </Container>
        );
    }
}
Executors.propTypes = {
    executors: PropTypes.object
}
export default connect((state)=>{
    return {
        executors: state.executors
    };
})(Executors);
