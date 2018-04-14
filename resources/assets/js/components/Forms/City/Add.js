import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button, Icon, Divider, Input, Form } from 'semantic-ui-react'
import { LocalForm, Control, actions } from 'react-redux-form';

export default class Add extends Component {
    render() {
        console.debug(this.props)
        return (
            <LocalForm model="city" onSubmit={ (v) => {this.props.handleSubmit(v);} } component={Form}>
                <Divider horizontal>Добавить город</Divider>
                <Form.Group>
                    <Form.Field>
                        <Control.text model="city.name" component={Input}/>
                    </Form.Field>
                    <Form.Field>
                        <Button icon primary positive type="submit"><Icon name="checkmark"/>Создать</Button>
                    </Form.Field>
                </Form.Group>
            </LocalForm>
        );
    }
}
Add.propTypes = {
    handleSubmit:PropTypes.func.isRequired
}
