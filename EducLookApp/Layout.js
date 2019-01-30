import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
//import { connect } from 'react-redux';

//import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

import Login from './src/containers/Login/Login';
import Home from './src/containers/Home/Home';
import MonthRecords from './src/containers/MonthRecords/MonthRecords';

import StatusBar from './src/components/StatusBar/StatusBar';
import MenuBar from './src/components/MenuBar/MenuBar';
import SideMenu from './src/containers/SideMenu/SideMenu';

class Layout extends Component {
	constructor (props) {
		super(props);
		this.state = {
			viewName: 'Login',
			showSideMenu: false
		};

		this.showSideMenu = this.showSideMenu.bind(this);
		this.setView = this.setView.bind(this);
	}

	showSideMenu = () => {
		const showSideMenu = !this.state.showSideMenu;
		this.setState({ showSideMenu: showSideMenu });
	}

	setView = (viewName) => {
		this.setState({viewName: viewName});
	}

	render() {	
		const statusBar =	(this.state.viewName === 'Login')? 
								(<View />):(<StatusBar viewName={this.state.viewName}/>);
		const menuBar	= 	(this.state.viewName === 'Login')? 
								(<View />):(<MenuBar showSideMenu={this.showSideMenu}/>);
		
		const sideMenu	=	(this.state.viewName === 'Login')?
								(<View />):(<SideMenu show={this.state.showSideMenu} hide={this.showSideMenu} setView={this.setView} />);
		
		let view = (<Login setView={this.setView} />);

		switch(this.state.viewName){
			case 'Home': view = (<Home />); break;
			case 'MonthRecords': view = (<MonthRecords />); break;
			default: break;
		}

		let content = (
				<View style={ styles.screen }>
					{sideMenu}
					{statusBar}
					<View style={styles.viewContainer}>
						{ view }
					</View>
					{menuBar}
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
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start'
	}
});

export default Layout;