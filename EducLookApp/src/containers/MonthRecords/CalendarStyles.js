const calStyles = {
	container: {
		borderColor: '#0083ff',
		borderWidth: 2,
		borderRadius: 10,
		padding: 7
	},
	theme: {
		backgroundColor: '#ffffff',
		calendarBackground: '#ffffff',
		textSectionTitleColor: '#0083ff',
		selectedDayBackgroundColor: '#0083ff',
		selectedDayTextColor: '#ffffff',
		todayTextColor: '#0083ff',
		dayTextColor: '#0083ff',
		arrowColor: '#0083ff',
		monthTextColor: '#0083ff'
	},
	greenContainer: {
		backgroundColor: '#14ff56',
		borderRadius: 15
	},
	yellowContainer: {
		backgroundColor: '#FBBA00',
		borderRadius: 15
	},
	redContainer: {
		backgroundColor: '#ff1447',
		borderRadius: 15
	},
	blueContainer: {
		backgroundColor: '#0083ff',
		borderRadius: 15
	},
	whiteText: {
		color: '#fff',
		fontWeight: 'bold'
	}
};

const customStyles = {
	greenDay: {
		container: calStyles.greenContainer,
		text: calStyles.whiteText,
	},
	yellowDay: {
		container: calStyles.yellowContainer,
		text: calStyles.whiteText,
	},
	redDay: {
		container: calStyles.redContainer,
		text: calStyles.whiteText,
	},
	blueDay: {
		container: calStyles.blueContainer,
		text: calStyles.whiteText
	}
};

export { calStyles, customStyles };