// fake db
var groups = [
    {name: "Lineare Algebra 2", description: "interessante Beschreibung", participants: "Emil, Peter Z.", dates: [[new Date("2024-01-01T08:10:00Z"), new Date("2024-01-01T10:10:00Z")], [new Date("2024-01-03T08:10:00Z"), new Date("2024-01-03T10:10:00Z")]]},
    {name: "Lineare Algebra 3", description: "interessante Beschreibung", participants: "Emil, Peter Z.", dates: [[new Date("2024-01-02T08:10:00Z"), new Date("2024-01-02T10:10:00Z")]]},
	{name: "Chicks?", description: "yes"},
	{name: "Sightseeing in Prague", description: "we go to Prague, ocassionally"},
	{name: "Fish lovers 322", description: "we love fish like noone"},
	{name: "Somebody has", description: "told me the"},
	{name: "The world is", description: "gonna roll me"}
];

var people = [
	{name: "Emil", surname: "Müller", interests: ["Linear Algebra", " Programming"]},
	{name: "M. Night", surname: "Shyamalan", interests: ["Filming", " Explosions"]},
	{name: "Bob", surname: "Williamson", interests: "Contry Music"},
	{name: "Hans", surname: "Anderson", interests: ["Bread crumbs", " Walking in the forest"]}
];

var interests = [
	" Linear Algebra", " Mathematics", " Analysis", " Computer Science", " Engineering", " Circuits", " Meeting People",
	" Partnership",    " Friendship",  " Chemistry"," Biology",          " Physics",    
]

function getGroups(user) {
    return groups;
}

function getInterests(user){
	return interests;
}

function getPeople(user) {
    return people;
}