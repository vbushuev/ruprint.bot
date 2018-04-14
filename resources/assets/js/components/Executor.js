import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Item, Label, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import Update from './Forms/Executor/Update';

export default class Executor extends Component {
    constructor(props){
        super(props);
    }
    state = {
        editing: false
    };
    toggleEditing = () => this.setState({ editing: !this.state.editing })
    handleUpdate = (v) => {this.setState({ editing: false }); this.props.handleUpdate(v); }
    render() {
        const {item} = this.props;
        const {activity,handleUpdate,handleDelete} = this.props;
        const {editing} = this.state;
        return (
            <Item>

                    {
                        editing
                        ?<Update handleSubmit={this.handleUpdate} item={item} cities={this.props.cities} activities={this.props.activities}/>
                    :<Item.Content>
                        <Item.Header>{item.name} {item.last_name}</Item.Header>
                        <Item.Meta>
                            <Label color="green" size="large">
                                <Icon name="ruble"/>{item.account.amount}<Label.Detail></Label.Detail>
                            </Label>
                            <Label color="blue" size="large">
                                <Icon name="phone"/>{item.phone}<Label.Detail></Label.Detail>
                            </Label>
                            <Label>
                                <Icon name="in cart"/>Заявок <Label.Detail>0</Label.Detail>
                            </Label>
                            <Label basic>
                                <Icon name="industry"/><Label.Detail>{item.activity.name}</Label.Detail>
                            </Label>
                            <Label basic>
                                <Icon name="map"/><Label.Detail>{item.city.name}</Label.Detail>
                            </Label>
                            <Button.Group size="mini" floated="right">
                                <Button size="mini" icon color="green" onClick={this.toggleEditing}>
                                    <Icon name="cogs"/>
                                </Button>
                                <Button size="mini" icon color="red" item={item} onClick={(e,{item}) => { handleDelete(item); }}>
                                    <Icon name="trash"/>
                                </Button>
                            </Button.Group>

                        </Item.Meta>
                        <Item.Description></Item.Description>
                        <Item.Extra>

                        </Item.Extra>
                    </Item.Content>
                    }

            </Item>
        );
    }
}
Executor.propTypes = {
    item: PropTypes.object.isRequired,
    handleUpdate: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}
