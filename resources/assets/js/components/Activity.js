import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Item, Button, Icon, Header, Label } from 'semantic-ui-react'
import { Field } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';
import { updateCity } from '../actions';
import Update from './Forms/Activity/Update';

class Activity extends Component {
    constructor(props){
        super(props);
    }
    state = { editing: false };
    toggleEditing = ()=> this.setState({ editing: !this.state.editing })
    componentWillReceiveProps(nextProps) {
        if (nextProps.startTime !== this.state.startTime) {
            this.setState({ startTime: nextProps.startTime });
        }
    }
    render() {
        const {activity,handleUpdate,handleDelete} = this.props;
        const {editing} = this.state;
        return (
            <Item>
                <Item.Content>
                    {
                        editing
                        ?<Update onSubmit={handleUpdate} activity={activity}/>
                        :<Item.Header>{activity.name}</Item.Header>
                    }

                    <Item.Meta>
                        <Label>
                            <Icon name="users"/>Исполнителей
                            <Label.Detail>{(activity.executors)?activity.executors.length:0}</Label.Detail>
                        </Label>
                    </Item.Meta>
                    <Item.Description></Item.Description>
                    <Item.Extra>
                        <Button size="mini" icon basic onClick={this.toggleEditing}>
                            <Icon name="cogs"/>
                        </Button>
                        <Button size="mini" icon color="red" onClick={ (e) => {handleDelete(activity);}}>
                            <Icon name="trash"/>
                        </Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
        );
    }
}
Activity.propTypes = {
    activity: PropTypes.object
};

// прокидываем в props объект для инициализаци формы
function mapStateToProps(state, ownProps){

    const id = ownProps.activity.id;
    for(let i in state.activities.data){
        // console.debug('City.mapStateToProps',state,ownProps,state.cities.data[i]);
        if(state.activities.data[i].id == id) return {'activity':state.activities.data[i]};
    }


}
// прокидываем в props функцию для инициализации формы
function mapDispatchToProps(dispatch){
    return {
        initializePost: function (post){
            dispatch(initialize('activity', post));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Activity);
