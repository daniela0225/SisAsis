db.users.insertMany([
{
	_id: ObjectId('5c5c6efad9b1457c03e1967e'),
	email:"admin@gmail.com",
	password:"1234",
	type:"ADMIN",
	school: ObjectId('5c5d9fe75cb286b5fae960a9')
},
{
	_id: ObjectId('5c5c6fbdd9b1457c03e19683'),
	email:"director@gmail.com",
	password:"1234",
	type:"DIRECTOR",
	school: ObjectId('5c5d9fe75cb286b5fae960a9')
},
{
	_id : ObjectId("5c62e15c173c30771fe7817c"),
	email : "jmartinez@gmail.com",
	password : "123456",
	type : "TUTOR",
	school : ObjectId("5c5d9fe75cb286b5fae960a9")
},
{
	_id : ObjectId("5c62e15c173c30771fe7817d"),
	email : "msuarez@gmail.com",
	password : "123456",
	type : "TUTOR",
	school : ObjectId("5c5d9fe75cb286b5fae960a9")
},
{
	_id : ObjectId("5c62e15c173c30771fe7817e"),
	email : "pvilla@gmail.com",
	password : "123456",
	type : "TUTOR",
	school : ObjectId("5c5d9fe75cb286b5fae960a9")
},
{
	_id : ObjectId("5c62e15c173c30771fe7817f"),
	email : "rpampa@gmail.com",
	password : "123456",
	type : "TUTOR",
	school : ObjectId("5c5d9fe75cb286b5fae960a9")
},
{
	_id : ObjectId("5c62f543173c30771fe78189"),
	email: "rflores.c@gmail.com",
	password : "123456",
	type : "TEACHER",
	school: ObjectId('5c5d9fe75cb286b5fae960a9'), 
},
{
	_id : ObjectId("5c62f543173c30771fe7818a"),
	email: "jmendoza.c@gmail.com"
	password : "123456",
	type : "TEACHER",
	school: ObjectId('5c5d9fe75cb286b5fae960a9'), 
},
{
	_id : ObjectId("5c62f543173c30771fe7818b"),
	email: "pgomez.t@gmail.com"
	password : "123456",
	type : "TEACHER",
	school: ObjectId('5c5d9fe75cb286b5fae960a9'),
}
]);