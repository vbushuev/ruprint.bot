import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Item, Button, Icon, Header, Input, Form, Divider,Segment } from 'semantic-ui-react'
import { LocalForm, Control, actions } from 'react-redux-form';
// import { InputField } from 'react-semantic-redux-form';

export default class Update extends Component {
    handleSubmit = (val)=>{
        console.debug(val);
    };
    render() {
        const {item,cities,activities,handleSubmit} = this.props;
        const props = this.props;
        return (
            <Segment>
            <LocalForm model="executor" onSubmit={ (v) => {console.debug(v);handleSubmit(v);} } component={Form}>
                <Divider horizontal>Редактор исполнителя</Divider>
                <Control.text type="hidden" model="executor.id" defaultValue={item.id}/>
                <Form.Field required>
                    <label>Телефон</label>
                    <Control.text model="executor.phone" component={Input} defaultValue={item.phone}/>
                </Form.Field>
                <Form.Group >
                    <Form.Field width="8" required>
                        <label>Имя</label>
                        <Control.text model="executor.name" component={Input} defaultValue={item.name}/>
                    </Form.Field>
                    <Form.Field required width="8">
                        <label>Фамилия</label>
                        <Control.text model="executor.last_name" component={Input} defaultValue={item.last_name}/>
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Field required width="6">
                        <label>Город</label>
                        <Control.select model="executor.city_id" placeholder='Выберете' className="ui dropdown" defaultValue={item.city.id}>
                            <option key="-1" className="color grey">Выберете...</option>
                            { cities.data.map( (itr,i) => {return <option key={i} value={itr.id}>{itr.name}</option>} ) }
                        </Control.select>
                    </Form.Field>
                    <Form.Field required  width="6">
                        <label>Вид деятельности</label>
                        <Control.select model="executor.activity_id" placeholder='Выберете' className="ui dropdown" defaultValue={item.activity.id}>
                            <option key="-1" className="color grey">Выберете...</option>
                            { activities.data.map( (item,i) => {return <option key={i} value={item.id}>{item.name}</option>} ) }
                        </Control.select>
                    </Form.Field>
                    <Form.Field width="4" align="right">
                        <label>&nbsp;</label>
                        <Button icon primary positive type="submit"><Icon name="checkmark"/>Сохранить</Button>
                    </Form.Field>
                </Form.Group>
            </LocalForm>
            </Segment>
        );
    }
}
