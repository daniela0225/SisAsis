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

module.exports = (req, res, next) => {
	try{
		if(can(req.role, req.action, req.table)){
			next();
		} else {
			res.status(403).end();
		}
	}
	catch(error){
		return res.status(401).json({
			message: 'Access Denied',
		});
	}
};