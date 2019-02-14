db.users.insertMany([
{
	_id: ObjectId('5c5c6efad9b1457c03e1967e'),
	email:"admin@gmail.com",
	password:"$2b$10$0hhK../oD4oPmRLgqqU3MeLBwRe52vUUYGKcJKyrwVuOy2bZ4WO12",
	type:"ADMIN",
	school: ObjectId('5c5d9fe75cb286b5fae960a9')
},
{
	_id: ObjectId('5c5c6fbdd9b1457c03e19683'),
	email:"director@gmail.com",
	password: "$2b$10$telcJP93PYMAZ6nL0us4neJCXmzuRHSRJR74HP/xO6AIjH4XQoIBy",
	type:"DIRECTOR",
	school: ObjectId('5c5d9fe75cb286b5fae960a9')
},
{
	_id : ObjectId('5c62e15c173c30771fe7817c'),
	email : "jmartinez@gmail.com",
	password : "$2b$10$.SF2YgJVXXMkK9Ja1cNfROKrbAc7C1u/jg9DeICPrSmrKSD.EyI.m",
	type : "TUTOR",
	school : ObjectId('5c5d9fe75cb286b5fae960a9')
},
{
	_id : ObjectId('5c62e15c173c30771fe7817d'),
	email : "msuarez@gmail.com",
	password : "$2b$10$Av4RHZxDJlNbH.i6p.IBDOhAhA3hMYyR7V/QRl.qtMcAU84iBEGQ6",
	type : "TUTOR",
	school : ObjectId('5c5d9fe75cb286b5fae960a9')
},
{
	_id : ObjectId('5c62e15c173c30771fe7817e'),
	email : "pvilla@gmail.com",
	password : "$2b$10$FNF95eByfY4QvASA3h41G.UOVJuV6lpqLjBYEErBjFz.NZYgFDom6",
	type : "TUTOR",
	school : ObjectId('5c5d9fe75cb286b5fae960a9')
},
{
	_id : ObjectId('5c62e15c173c30771fe7817f'),
	email : "rpampa@gmail.com",
	password : "$2b$10$pZWzA5aEFUv/va2X1hhTte4qN1oGbY7IQBeyjK7c3vjCpe0Nwlh/y",
	type : "TUTOR",
	school : ObjectId('5c5d9fe75cb286b5fae960a9')
},
{
	_id : ObjectId('5c62f543173c30771fe78189'),
	email: "rflores.c@gmail.com",
	password : "$2b$10$1v7w8kqlgdSQa.mRcuQI6.453YLNRHG1lkmxCHPusA/3eRTSX3Zrq",
	type : "TEACHER",
	school: ObjectId('5c5d9fe75cb286b5fae960a9'), 
},
{
	_id : ObjectId('5c62f543173c30771fe7818a'),
	email: "jmendoza.c@gmail.com"
	password : "$2b$10$Udi1tpTAFUQUNn4E29m5QeQ597Sj/.d0Mw6XJJGAfqvv6FrMzVlxu",
	type : "TEACHER",
	school: ObjectId('5c5d9fe75cb286b5fae960a9'), 
},
{
	_id : ObjectId('5c62f543173c30771fe7818b'),
	email: "pgomez.t@gmail.com"
	password : "$2b$10$v6SkeEqLdtf5.I92u/Kv0OLo7kO0v.fIMVuPkglJeP8..VfBfRh/G",
	type : "TEACHER",
	school: ObjectId('5c5d9fe75cb286b5fae960a9'),
}
]);