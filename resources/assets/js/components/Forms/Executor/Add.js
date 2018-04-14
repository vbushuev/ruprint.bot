import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button, Icon, Divider, Input, Label, Form , Dropdown,Select } from 'semantic-ui-react'
import { Form as LocalForm, Control, actions } from 'react-redux-form';

export default class Add extends Component {
    constructor(props){
        super(props);
        // this.cityIdRef = React.createRef();
        // this.activityIdRef = React.createRef();
    }
    render() {
        let cities = [],activities=[];
        this.props.cities.data.map((item,i)=>{cities.push({key:i,text:item.name,value:item.id});});
        this.props.activities.data.map((item,i)=>{activities.push({key:i,text:item.name,value:item.id});});

        return (
            <LocalForm model="executor" onSubmit={ (v) => {this.props.handleSubmit(v);} } component={Form}>
                <Divider horizontal>Новый исполнитель</Divider>
                <Form.Field required>
                    <label>Телефон</label>
                    <Control.text model="executor.phone" component={Input}/>
                </Form.Field>
                <Form.Group >
                    <Form.Field width="8" required>
                        <label>Имя</label>
                        <Control.text model="executor.name" component={Input}/>
                    </Form.Field>
                    <Form.Field required width="8">
                        <label>Фамилия</label>
                        <Control.text model="executor.last_name" component={Input}/>
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Field required width="6">
                        <label>Город</label>
                        <Control.select model="executor.city_id" placeholder='Выберете' className="ui dropdown">
                            <option key="-1" className="color grey">Выберете...</option>
                            { cities.map( (item,i) => {return <option key={i} value={item.value}>{item.text}</option>} ) }
                        </Control.select>
                    </Form.Field>
                    <Form.Field required  width="6">
                        <label>Вид деятельности</label>
                        <Control.select model="executor.activity_id" placeholder='Выберете' className="ui dropdown">
                            <option key="-1" className="color grey">Выберете...</option>
                            { activities.map( (item,i) => {return <option key={i} value={item.value}>{item.text}</option>} ) }
                        </Control.select>
                    </Form.Field>
                    <Form.Field width="4" align="right">
                        <label>&nbsp;</label>
                        <Button icon primary positive type="submit"><Icon name="checkmark"/>Создать</Button>
                    </Form.Field>
                </Form.Group>
                <Form.Group>

                </Form.Group>
            </LocalForm>
        );
    }
}
Add.propTypes = {
    handleSubmit:PropTypes.func.isRequired
}
/*
<Dropdown selection placeholder='Выберете город' model="executor.city_id" options={cities}></Dropdown>
<Control.select model="executor.city_id" component={Dropdown} selection placeholder='Выберете город'  options={cities}/>
<Control.select model="executor.activity_id" id="executor.activity_id" component={Dropdown} selection placeholder='Выберете' options={activities}/>
<Control.text type="hidden" model="executor.city_id" ref={this.cityIdRef} defaultValue="1" value/>
<Control.text type="hidden" model="executor.activity_id" ref={this.activityIdRef} defaultValue="1" value/>
<Control.select model="executor.activity_id" component={Select} simple placeholder='Выберете' options={activities}/>
*/
