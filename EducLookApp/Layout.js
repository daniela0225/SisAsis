import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
//import { connect } from "react-redux";

//import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

import Login from './src/containers/Login/Login';

import StatusBar from './src/components/StatusBar/StatusBar';
import Home from './src/containers/Home/Home';

import SideMenu from './src/containers/SideMenu/SideMenu';

class Layout extends Component {
	constructor (props) {
		super(props);
		this.state = {
			viewName: "Home",
			showSideMenu: false
		};

		this.showSideMenu = this.showSideMenu.bind(this);
	}

	showSideMenu = () => {
		const showSideMenu = !this.state.showSideMenu;
		this.setState({ showSideMenu: showSideMenu });
		console.log(showSideMenu);
	}

	render() {
		
		const statusBar = (this.state.viewName === "Login" || this.state.viewName === "SideMenu")? 
			(<View />):(<StatusBar viewName={this.state.viewName} showSideMenu={this.showSideMenu} />);

		const content = (this.state.viewName === 'SideMenu')?(
				<View style={ styles.screen }>
					<SideMenu />
				</View>
			):(
				<View style={ styles.screen }>
					<SideMenu show={this.state.showSideMenu} hide={this.showSideMenu} />
					{statusBar}
					<View style={styles.viewContainer}>
						<Home />
					</View>
				</View>
			);

		return content;
	}
}

const styles = StyleSheet.create({
	screen: {
		width:'100%',
		height:'100%'
	},
	viewContainer: {
		flex: 1,
		padding: 35,
		paddingTop: 0,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start"
	}
});

export default Layout;