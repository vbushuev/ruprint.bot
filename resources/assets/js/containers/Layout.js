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
import Activities from './Activities';


class Layout extends Component {
    state = { visible: false, activeItem:'home' };
    constructor(props){
        super(props);
    }
    toggleVisibility = ()=> this.setState({ visible: !this.state.visible })
    handleItemClick = (e, { name }) => this.setState({ activeItem: name,visible:false })
    render() {
        const { visible, activeItem } = this.state;
        const HomePage = (props) => {
            const {executors,activities,cities,orders} = this.props;
            return (
                <Container align="center">
                    <Header className="first on top">Главная страница</Header>
                    <Statistic.Group align="center">
                        <Statistic>
                          <Statistic.Value>{orders.data.length || 0}</Statistic.Value>
                          <Statistic.Label>Заявок</Statistic.Label>
                        </Statistic>


                        <Statistic>
                          <Statistic.Value>
                            <Icon name='users' />
                            {executors.data.length || 0}
                          </Statistic.Value>
                          <Statistic.Label>Исполнителей</Statistic.Label>
                        </Statistic>
                      </Statistic.Group>
                </Container>
            );
        };
        const CitiesPage = (props) => {
            return (
                <Cities cities={this.props.cities} actions={this.props.actions}/>
            );
        };
        const ActivitiesPage = (props) => {
            return (
                <Activities activities={this.props.activities} actions={this.props.actions}/>
            );
        };
        const ExecutorsPage = (props) => {
            return (
                <Executors executors={this.props.executors} actions={this.props.actions} cities={this.props.cities} activities={this.props.activities}/>
            );
        };
        const pathname = 'cities';
        return (

            <div className="fullHeight">
                <Menu inverted fixed="top">
                    <Menu.Item name='sidebar' onClick={this.toggleVisibility}><Icon name="bars"/></Menu.Item>
                </Menu>
                <BrowserRouter>
                    <Sidebar.Pushable as={Segment}  className="first on top">
                        <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
                            <Menu.Item as={Link} to="/admin" name='home' active={activeItem ==='home'} onClick={this.handleItemClick}>
                                <Icon name='home' />Главная
                            </Menu.Item>
                            <Menu.Item as={Link} to="/admin/executors" name='users'  active={activeItem==='users'} onClick={this.handleItemClick}>
                                <Icon name='users' />Исполнители
                            </Menu.Item>
                            <Menu.Item as={Link} to="/admin/cities" name='city' active={activeItem==='city'} onClick={this.handleItemClick}>
                                <Icon name='map' />
                                Города
                            </Menu.Item>
                            <Menu.Item as={Link} to="/admin/activities" name='activity' active={activeItem==='activity'} onClick={this.handleItemClick}>
                                <Icon name='industry' />
                                Виды деятельности
                            </Menu.Item>
                            <Menu.Item as={Link} to="/admin/transactions" name='transaction' active={activeItem==='activity'} onClick={this.handleItemClick}>
                                <Icon name='dollar' />
                                Платежи
                            </Menu.Item>
                        </Sidebar>
                        <Sidebar.Pusher>
                            <Route exact path="/admin" render={HomePage} />
                            <Route exact path="/admin/cities" render={CitiesPage} />
                            <Route exact path="/admin/executors" render={ExecutorsPage} />
                            <Route exact path="/admin/activities" render={ActivitiesPage} />
                            <Route exact path="/admin/transactions" render={ActivitiesPage} />
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </BrowserRouter>
            </div>
        );
    }
}
Layout.propTypes = {
    orders: PropTypes.object,
    executors: PropTypes.object,
    user: PropTypes.object,
    cities: PropTypes.object,
    activities: PropTypes.object
}
export default connect((state)=>{
    return {
        orders: state.orders,
        cities: state.cities,
        activities: state.activities,
        executors: state.executors
    };
}, (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
})(Layout);
