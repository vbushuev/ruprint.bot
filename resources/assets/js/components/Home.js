import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { Container, Segment, Button, Menu, Image, Icon, Header,Item } from 'semantic-ui-react'

class Home extends Component {

    state = { visible: false };
    toggleVisibility = ()=> this.setState({ visible: !this.state.visible })

    render() {
        const { user } = this.props;
        return (
            <Container>
                <Header as='h3'>Главная страница</Header>
            </Container>
        );
    }
}
Home.propTypes = {
    user: PropTypes.object
}
export default connect((state)=>{
    return {
        user: state.user
    };
})(Home);
