import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Segment, Button, Menu, Image, Icon, Header,Item, Divider } from 'semantic-ui-react'

import Activity from '../components/Activity';
import Add from '../components/Forms/Activity/Add';

class Activities extends Component {
    constructor(props){
        super(props);
    }
    state = { adding: false };
    // componentDidMount(){
    //     this.props.actions.fetchCitiesIfNeeded()
    // }
    render() {
        const {activities, actions} = this.props;
        return (
            <Container>
                <Header>Виды деятельности</Header>
                <Button icon primary onClick={ (e) => this.setState({ adding:!this.state.adding }) }>
                    <Icon name={this.state.adding?"angle up":"plus"}/>
                </Button>
                {this.state.adding?<Add handleSubmit={actions.activityAdd}/>:''}
                <Divider horizontal>Список</Divider>
                <Item.Group divided>
                    { activities.data.map( (row,i) => {return <Activity key={i} activity={row} handleUpdate={actions.activityEdit} handleDelete={actions.activityRemove}/>}) }
                </Item.Group>
            </Container>
        );
    }
}
Activities.propTypes = {
    activities: PropTypes.object,
    actions: PropTypes.object
}
export default connect((state)=>{
    return {
        activities: state.activities
    };
})(Activities);
