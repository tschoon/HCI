// fake db
var groups = [
    {name: "Lineare Algebra 2", description: "interessante Beschreibung", participants: "Emil, Peter Z.", dates: [[new Date("2024-01-01T08:10:00Z"), new Date("2024-01-01T10:10:00Z")], [new Date("2024-01-03T08:10:00Z"), new Date("2024-01-03T10:10:00Z")]]},
    {name: "Lineare Algebra 3", description: "interessante Beschreibung", participants: "Emil, Peter Z.", dates: [[new Date("2024-01-02T08:10:00Z"), new Date("2024-01-02T10:10:00Z")]]},
	{name: "Programming?", description: "C, C++, Java, Python 3"},
	{name: "Sightseeing in Prague", description: "we go to Prague, ocassionally"},
	{name: "FPS Video Games", description: "we play PUBG, CS, and others"},
	{name: "WG", description: "if you need a place, you will find it here"},
	{name: "Physics 1", description: "We help everyone who wants to know who Maxwell is"}
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