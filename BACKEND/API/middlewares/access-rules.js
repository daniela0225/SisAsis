const jwt = require('jsonwebtoken');

class Rules {
	constructor(createOwn, readOwn, updateOwn, deleteOwn, createAny, readAny, updateAny, deleteAny){
		this.createOwn = createOwn;
		this.readOwn = createOwn;
		this.updateOwn = createOwn;
		this.deleteOwn = createOwn;
		this.createAny = createAny;
		this.readAny = createAny;
		this.updateAny  = createAny;
		this.deleteAny = createAny;
	}
}

class Roles {
	constructor(admin, director, tutor, doorman){
		this.ADMIN = admin;
		this.DIRECTOR = director;
		this.TUTOR = tutor;
		this.DOORMAN = doorman;
	}
}

class TableRules {
	constructor(roleRules){
		var roles = new Array();

		for(var obj in roleRules){
			var rules = new Rules( obj[0], obj[1], obj[2], obj[3], obj[4], obj[5], obj[6], obj[7]);
			var role = new Role(rules);
			roles.push(role);
		}
		
		this.ADMIN_RULES = roles[0];
		this.DIRECTOR_RULES = roles[1];
		this.TUTOR_RULES = roles[2];
		this.DOORMAN_RULES = roles[3];
	}
}

function can(role,action,table){
	var roleName = role + "_RULES";

	const completeRules = {
		record : new TableRules([
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true]
						]),
		school : new TableRules([
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true]
						]),
		student : new TableRules([
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true]
						]),
		tutor : new TableRules([
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true]
						]),
		user : new TableRules([
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true],
							[true,true,true,true,true,true,true,true]
						])
	}

	if(((completeRules[[table]])[[roleName]])[[action]]){
		return true;
	}

	return false;
}

function tranformAction(table,url,method){
	switch(table){
		case "registros":
			switch(url){
				case "/find": return "readAny"; break;
				case "/update": return "updateAny"; break;
				case "/delete": return "deleteAny"; break;
				case "/": return (method == "POST")?"createAny":"readAny"; break;
				default: return; break;
			}
			break;
		case "colegios":
			switch(url){
				case "/find": return "readAny"; break;
				case "/update": return "updateAny"; break;
				case "/delete": return "deleteAny"; break;
				case "/": return (method == "POST")?"createAny":"readAny"; break;
				default: return; break;
			}
			break;
		case "alumnos":
			switch(url){
				case "/find": return "readAny"; break;
				case "/update": return "updateAny"; break;
				case "/delete": return "deleteAny"; break;
				case "/": return (method == "POST")?"createAny":"readAny"; break;
				default: return; break;
			}
			break;
		case "tutores":
			switch(url){
				case "/find": return "readAny"; break;
				case "/update": return "updateAny"; break;
				case "/delete": return "deleteAny"; break;
				case "/": return (method == "POST")?"createAny":"readAny"; break;
				default: return; break;
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
				default: return; break;
			}
			break;
		default: return;
	}
}

module.exports = (req, res, next) => {
	try{
		var role = req.userData.type;
		var action = req.url;
		var table = table.substr(1,table.length-2);
		console.log("Role:" + role + "-Action:" + action + "-Table:" + table);
		if(can(role, tranformAction(table,action,req.method), table)){
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