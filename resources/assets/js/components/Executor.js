import React, { Component } from 'react'
import { Item, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

export default class Executor extends Component {
    constructor(ex){
        super();
        this.executor = ex;
    }
    render() {
        const executor = this.executor;
        return (
            <Item>
                <Item.Content>{executor.name} {executor.last_name}</Item.Content>
            </Item>
        );
    }
}
