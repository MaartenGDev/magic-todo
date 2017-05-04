import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import SideBar from './Sidebar';

export default class Header extends Component {
    state = {
        drawerIsOpen: false
    }

    toggleDrawer = () => {
        this.setState({drawerIsOpen: !this.state.drawerIsOpen});
    }

    render() {
        return (
            <nav>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.toggleDrawer}
                />
                <SideBar toggleDrawer={this.toggleDrawer} isOpen={this.state.drawerIsOpen}/>
            </nav>
        );
    }
}