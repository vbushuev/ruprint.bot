import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Header } from 'semantic-ui-react';

export default class Example extends Component {
    render() {
        return (
            <div className="ui container">
                <Header>Список Исполнителей</Header>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
