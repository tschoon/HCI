// fake db
var groups = [
    {name: "Lineare Algebra 2", description: "interessante Beschreibung", participants: "Emil, Peter Z.", dates: [[new Date("2024-01-01T08:10:00Z"), new Date("2024-01-01T10:10:00Z")], [new Date("2024-01-03T08:10:00Z"), new Date("2024-01-03T10:10:00Z")]]},
    {name: "Lineare Algebra 3", description: "interessante Beschreibung", participants: "Emil, Peter Z.", dates: [[new Date("2024-01-02T08:10:00Z"), new Date("2024-01-02T10:10:00Z")]]}
];

function getGroups(user) {
    return groups;
}