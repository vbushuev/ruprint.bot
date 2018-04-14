import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Item, Button, Icon, Header, Input, Form } from 'semantic-ui-react'
import { LocalForm, Control, actions } from 'react-redux-form';
// import { InputField } from 'react-semantic-redux-form';

export default class CityForm extends Component {
    handleSubmit = (val)=>{
        console.debug(val);
    };
    render() {
        const {onSubmit, reset} = this.props;
        const props = this.props;
        console.debug('CitiForm.render',this.props);
        return (
            <LocalForm model="city" onSubmit={onSubmit} component={Form}>
                <Control type="hidden" model="city.id" defaultValue={props.city.id}/>
                <Form.Group>
                    <Form.Field>
                        <Control model="city.name" component={Input}   defaultValue={props.city.name}/>
                    </Form.Field>
                    <Form.Field>
                        <Button icon primary positive type="submit"><Icon name="checkmark"/>Сохранить</Button>
                    </Form.Field>
                </Form.Group>
            </LocalForm>
        );
    }
}
// export default CityForm = reduxForm({
//     form:'city'
// })
/*
<Form model="city" onSubmit={handleSubmit}>
    <Control.hidden name="id" model="city.id"/>
    <Form.Group>
        <Form.Field>
            <Field name="name" component="Input" type="text"/>
        </Form.Field>
        <Form.Field>
            <Button type="submit" icon><Icon name="checkmark"/>Сохранить</Button>
        </Form.Field>
    </Form.Group>
</Form>

<Form.Group>
    <Form.Field>
        <Control.text model="city.name" id="city.name"/>
    </Form.Field>
</Form.Group>
*/
