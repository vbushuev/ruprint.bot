import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Item, Button, Icon, Header, Input, Form } from 'semantic-ui-react'
import { LocalForm, Control, actions } from 'react-redux-form';
// import { InputField } from 'react-semantic-redux-form';

export default class Update extends Component {
    handleSubmit = (val)=>{
        console.debug(val);
    };
    render() {
        const {onSubmit} = this.props;
        const props = this.props;
        return (
            <LocalForm model="activity" onSubmit={onSubmit} component={Form}>
                <Control type="hidden" model="activity.id" defaultValue={props.activity.id}/>
                <Form.Group>
                    <Form.Field>
                        <Control model="activity.name" component={Input}   defaultValue={props.activity.name}/>
                    </Form.Field>
                    <Form.Field>
                        <Button icon primary positive type="submit"><Icon name="checkmark"/>Сохранить</Button>
                    </Form.Field>
                </Form.Group>
            </LocalForm>
        );
    }
}
