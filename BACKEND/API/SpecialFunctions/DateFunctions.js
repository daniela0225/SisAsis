
const getDateWithoutTime = (date) => {
	const newDate = new Date( date.getFullYear(), date.getMonth() + 1, date.getDate() );
	return newDate;
}

const getHolidays = (year) => {
	let holidays = [];
	let posibleHolidays = [
		new Date(year,5,1),
		new Date(year,6,29),
		new Date(year,7,28),
		new Date(year,7,29),
		new Date(year,8,30),
		new Date(year,11,1),
		new Date(year,12,8)
	];

	for (let i = 0; i < posibleHolidays.length; i++) {		
		if(isWeekday(posibleHolidays[i])){
			holidays.push(posibleHolidays[i]);
		}
	}

	return holidays;
}

const isWeekday = (date) => {
	let day = date.getDay();
	return (day == 0 || day == 6)? false : true;
}

const isHoliday = (date) => {
	date = getDateWithoutTime(date);
	let holidays = getHolidays(date.getFullYear());
	return ( holidays.includes(date) )? true : false;
}

const daysBetween = (startDate, endDate) => {
	let ndays = 1 + Math.round( ( endDate.getTime() - startDate.getTime() ) / (24*3600*1000) );
	console.log("daysBetween" + ndays);
	return ndays;
}

const weekendDaysBetween = (startDate, endDate) => {
	let ndays = 1 + Math.round( ( endDate.getTime() - startDate.getTime() ) / (24*3600*1000) );
	let nsaturdays = Math.floor( ( startDate.getDay() + ndays ) / 7 );
	
	return 2*nsaturdays + ( startDate.getDay() == 0 ) - ( endDate.getDay()==6 );
}

const holidaysBetween = (startDate, endDate) => {
	let holidaysNumber = 0;
	let holidays = getHolidays(startDate.getFullYear());
	
	let startDay = startDate.getDate();
	let endDay = endDate.getDate();
	let startMonth = startDate.getMonth() + 1;
	let endMonth = endDate.getMonth() + 1;

	for (let i = 0; i < holidays.length; i++) {
		const itemDay = holidays[i].getDate();
		const itemMonth = holidays[i].getMonth();

		if(itemDay >= startDay && itemDay <= endDay) {
			if(itemMonth >= startMonth && itemMonth <= endMonth) {
				holidaysNumber++;
			}
		}
	}

	return holidaysNumber;
}


module.exports = { 
	getDateWithoutTime,
	getHolidays,
	isWeekday,
	isHoliday,
	daysBetween,
	weekendDaysBetween,
	holidaysBetween
};