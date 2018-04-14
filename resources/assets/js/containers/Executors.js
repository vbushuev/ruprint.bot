import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { Container, Segment, Button, Menu, Image, Icon, Header,Item, Divider } from 'semantic-ui-react'

import Executor from '../components/Executor';
import Add from '../components/Forms/Executor/Add';

class Executors extends Component {

    state = { adding: false };
    componentDidMount(){
        this.props.actions.executorList()
    }
    render() {
        const executors  = this.props.executors.data;
        const {actions} = this.props;
        return (
            <Container>
                <Header align="center">Исполнители</Header>
                <Button icon primary onClick={ (e) => this.setState({ adding:!this.state.adding }) }>
                    <Icon name={this.state.adding?"angle up":"plus"}/>
                </Button>
                {this.state.adding?<Add handleSubmit={actions.executorAdd} cities={this.props.cities} activities={this.props.activities}/>:''}
                <Divider horizontal>Список</Divider>
                <Item.Group>
                    { executors.map( (row,i) => {return <Executor key={i} item={row} cities={this.props.cities} activities={this.props.activities} handleUpdate={actions.executorEdit} handleDelete={actions.executorRemove}/>}) }
                </Item.Group>
            </Container>
        );
    }
}
Executors.propTypes = {
    cities: PropTypes.object,
    executors: PropTypes.object,
    activities: PropTypes.object,
    actions: PropTypes.object
}
export default connect((state)=>{
    return {
        executors: state.executors
    };
})(Executors);
