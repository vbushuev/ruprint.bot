import 'semantic-ui-css/semantic.min.css';
import '../app.css';

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Sidebar, Container, Segment, Button, Menu, Image, Icon, Header,Statistic } from 'semantic-ui-react'

import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'



import * as actions from '../actions';
import Executors from './Executors';
import Cities from './Cities';


class Layout extends Component {
    state = { visible: true };
    toggleVisibility = ()=> this.setState({ visible: !this.state.visible })
    render() {
        const { visible } = this.state;
        const HomePage = () => {
            return (
                <Container>
                    <Header as="h3">Главная страница</Header>
                    <Statistic.Group>
                        <Statistic>
                          <Statistic.Value>22</Statistic.Value>
                          <Statistic.Label>Saves</Statistic.Label>
                        </Statistic>

                        <Statistic>
                          <Statistic.Value text>
                            Three<br />
                            Thousand
                          </Statistic.Value>
                          <Statistic.Label>Signups</Statistic.Label>
                        </Statistic>

                        <Statistic>
                          <Statistic.Value>
                            <Icon name='plane' />
                            5
                          </Statistic.Value>
                          <Statistic.Label>Flights</Statistic.Label>
                        </Statistic>
                      </Statistic.Group>
                </Container>
            );
        };
        const CitiesPage = (props) => {
            return (
                <Cities cities={this.props.cities} getCities={this.props.actions.getCities}/>
            );
        };
        const ExecutorsPage = (props) => {
            return (
                <Executors executors={this.props.executors}/>
            );
        };
        return (
            <div className="fullHeight">
                <Button basic onClick={this.toggleVisibility}><Icon name="bars"/></Button>
                <BrowserRouter>
                    <Sidebar.Pushable as={Segment}>
                        <Sidebar as={Menu} animation='uncover' width='thin' visible={visible} icon='labeled' vertical inverted>
                            <Menu.Item as={Link} to="/admin" name='home' active>
                                <Icon name='home' />Главная
                            </Menu.Item>
                            <Menu.Item as={Link} to="/admin/executors" name='users'>
                                <Icon name='users' />Исполнители
                            </Menu.Item>
                            <Menu.Item as={Link} to="/admin/cities" name='city'>
                                <Icon name='map' />
                                Города
                            </Menu.Item>
                            <Menu.Item name='activity'>
                                <Icon name='industry' />
                                Виды деятельности
                            </Menu.Item>
                            <Menu.Item name='transaction'>
                                <Icon name='dollar' />
                                Платежи
                            </Menu.Item>
                        </Sidebar>
                        <Sidebar.Pusher>
                            <Route exact path="/admin" render={HomePage} />
                            <Route exact path="/admin/cities" render={CitiesPage} />
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </BrowserRouter>
            </div>
        );
    }
}
Layout.propTypes = {
    executors: PropTypes.object,
    user: PropTypes.object,
    cities: PropTypes.object,
    activities: PropTypes.array
}
export default connect((state)=>{
    return {
        user: state.user,
        cities: state.cities,
        activities: state.activities,
        executors: state.executors
    };
}, (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
})(Layout);
