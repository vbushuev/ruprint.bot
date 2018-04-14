import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Item, Button, Icon, Header, Label } from 'semantic-ui-react'
import { Field } from 'redux-form';
import { InputField } from 'react-semantic-redux-form';
import { updateCity } from '../actions';
import CityForm from './CityForm';

class City extends Component {
    constructor(props){
        super(props);

    }
    state = { editing: false };
    toggleEditing = ()=> this.setState({ editing: !this.state.editing })
    citySave = (e) => {
        this.setState({editing: false})
        this.props.handleUpdate(e);

    };
    cityDelete = () =>{
        this.props.handleDelete(this.props.city);
    }
    componentWillReceiveProps(nextProps) {
        console.debug('componentWillReceiveProps',nextProps);
        if (nextProps.startTime !== this.state.startTime) {
            this.setState({ startTime: nextProps.startTime });
        }
    }
    render() {
        const {city,update} = this.props;
        const {editing} = this.state;
        return (
            <Item>
                <Item.Content>
                    {
                        editing
                        ?<CityForm onSubmit={this.citySave} city={city}/>
                        :<Item.Header>{city.name}</Item.Header>
                    }

                    <Item.Meta>
                        <Label>
                            <Icon name="users"/>Исполнителей
                            <Label.Detail>{(city.executors)?city.executors.length:0}</Label.Detail>
                        </Label>
                    </Item.Meta>
                    <Item.Description></Item.Description>
                    <Item.Extra>
                        <Button size="mini" icon basic onClick={this.toggleEditing}>
                            <Icon name="cogs"/>
                        </Button>
                        <Button size="mini" icon color="red" onClick={this.cityDelete}>
                            <Icon name="trash"/>
                        </Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
        );
    }
}
City.propTypes = {
    city: PropTypes.object
};
// прокидываем в props функцию для инициализации формы
function mapDispatchToProps(dispatch){
    console.debug('mapDispatchToProps called');
    return {
        initializePost: function (post){
            dispatch(initialize('city', post));
        }
    }
}
// прокидываем в props объект для инициализаци формы
function mapStateToProps(state, ownProps){
    const id = ownProps.city.id;
    for(let i in state.cities.data){
        // console.debug('City.mapStateToProps',state,ownProps,state.cities.data[i]);
        if(state.cities.data[i].id == id) return {'city':state.cities.data[i]};
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(City);
