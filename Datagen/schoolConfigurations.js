db.schoolConfigurations.insert({
        _id : ObjectId('5c630497173c30771fe78194'),
        school : ObjectId('5c5d9fe75cb286b5fae960a9'),
        year : 2019,
        startDate : ISODate('2019-03-11T00:00:01Z'),
        endDate : ISODate('2019-12-20T00:00:01Z'),
        kinderSchedule : {
                "startHour" : "08:00",
                "endHour" : "13:00",
                "tolerance" : 15
        },
        primarySchedule : {
                "startHour" : "07:45",
                "endHour" : "14:45",
                "tolerance" : 15
        },
        secondarySchedule : {
                "startHour" : "07:45",
                "endHour" : "15:45",
                "tolerance" : 15
        },
        vacations : ([
        {       
                start: ISODate('2019-05-27T00:00:01Z') ,
                end: ISODate('2019-05-31T00:00:01Z')
        },
        {
                start: ISODate('2019-07-26T00:00:01Z'),
                end: ISODate('2019-08-12T00:00:01Z')
        },
        {
                start: ISODate('2019-10-21T00:00:01Z'),
                end: ISODate('2019-10-25T00:00:01Z')
        }
        ])

});
        

