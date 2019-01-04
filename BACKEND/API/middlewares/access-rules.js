const jwt = require('jsonwebtoken');

class Rules {
	constructor(createOwn, readOwn, updateOwn, deleteOwn, createAny, readAny, updateAny, deleteAny){
		this.createOwn = createOwn;
		this.readOwn = readOwn;
		this.updateOwn = updateOwn;
		this.deleteOwn = deleteOwn;
		this.createAny = createAny;
		this.readAny = readAny;
		this.updateAny  = updateAny;
		this.deleteAny = deleteAny;
	}
}

class TableRules {
	constructor(roleRules){
		var roles = new Array();

		for(var i = 0; i < 4; i++){
			var rules = new Rules(	roleRules[i][0], roleRules[i][1], roleRules[i][2], roleRules[i][3],
									roleRules[i][4], roleRules[i][5], roleRules[i][6], roleRules[i][7]	);
			roles.push(rules);
		}

		this.ADMIN_RULES = roles[0];
		this.DIRECTOR_RULES = roles[1];
		this.TUTOR_RULES = roles[2];
		this.DOORMAN_RULES = roles[3];
	}
}

function can(role,action,table){
	console.log("Role: " + role + " - Action: " + action +" - Table: " + table);

	var completeRules = {
		record : new TableRules(new Array(
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true]
						)),
		school : new TableRules(new Array(
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true]
						)),
		student : new TableRules(new Array(
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true]
						)),
		tutor : new TableRules(new Array(
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true]
						)),
		user : new TableRules(new Array(
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true]
						))
	}

	//var a = completeRules[transformTable(table)][role][action];
	if(completeRules[transformTable(table)][role][action]){
		return true;
	}

	return false;
}

function transformTable(table){
	switch (table){
		case "registros": return "record";break;
		case "colegios": return "school" ;break;
		case "alumnos": return "student" ;break;
		case "tutores": return "tutor" ;break;
		case "usuarios": return "user" ;break;
	}
		
}

function tranformAction(table,url,method){
	switch(table){
		case "registros":
			switch(url){
				case "/find": return "readAny"; break;
				case "/update": return "updateAny"; break;
				case "/delete": return "deleteAny"; break;
				case "/": return (method == "POST")?"createAny":"readAny"; break;
				default: return ""; break;
			}
			break;
		case "colegios":
			switch(url){
				case "/find": return "readAny"; break;
				case "/update": return "updateAny"; break;
				case "/delete": return "deleteAny"; break;
				case "/": return (method == "POST")?"createAny":"readAny"; break;
				default: return ""; break;
			}
			break;
		case "alumnos":
			switch(url){
				case "/find": return "readAny"; break;
				case "/update": return "updateAny"; break;
				case "/delete": return "deleteAny"; break;
				case "/": return (method == "POST")?"createAny":"readAny"; break;
				default: return ""; break;
			}
			break;
		case "tutores":
			switch(url){
				case "/find": return "readAny"; break;
				case "/update": return "updateAny"; break;
				case "/delete": return "deleteAny"; break;
				case "/": return (method == "POST")?"createAny":"readAny"; break;
				default: return ""; break;
			}
			break;
		case "usuarios":
			switch(url){
				case "/password": return "updateAny"; break;
				case "/login": return "readOwn"; break;
				case "/search": return "readAny"; break;
				case "/menu": return "readOwn"; break;
				case "/edit": return "updateOwn"; break;
				case "/getUserById": return "readAny"; break;
				case "/update": return "updateAny"; break;
				case "/delete": return "deleteAny"; break;
				case "/": return (method == "POST")?"createAny":"readAny"; break;
				default: return ""; break;
			}
			break;
		default: return "";
	}
}

module.exports = (req, res, next) => {
	try{
		var role = req.userData.type + "_RULES";
		var action = req.url;
		var table = req.originalUrl;

		if(can(	role, 
				tranformAction(table.substr(1,table.length-2),action,req.method), 
				table.substr(1,table.length-2))){
			next();
		} else {
			res.status(403).end();
		}
	}
	catch(error){
		return res.status(401).json({
			message: 'Access Denied'
		});
	}
};
