let people = [
    {
        name: "Robert Downey Jr.",
        age: 52,
        city: "New York",
        salary: "500000"
    },

    {
        name: "Clint Barton",
        age: 45,
        city: "Austria",
        salary: "50000"
    },

    {
        name: "Tom Holland",
        age: 25,
        city: "New York",
        salary: "20000"
    },

    {
        name: "Chris Evans",
        age: 40,
        city: "California",
        salary: "100000"
    },

    {
        name: "Chris Hemsworth.",
        age: 35,
        city: "Asgard",
        salary: "50000"
    }
];

function display(people)
{
    let tabledata = "";
    people.forEach(function(element, index){
        let peoplearr = `<tr>
        <td>${index + 1}</td>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.city}</td>
        <td>${element.salary}</td>
        <td><button onclick="remove(${index})">Delete</button></td>
        </tr>`;
    tabledata += peoplearr;
    });
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}
display(people);


function searchName()
{
    let search_name = document.getElementsByClassName("search")[0].value;
    let result = people.filter(function(searchbyname) {
        return searchbyname.name.toLowerCase().indexOf(search_name.toLowerCase()) != -1
    });
    display(result);
}

function searchCity()
{
    let search_city = document.getElementsByClassName("search")[1].value;
    let result = people.filter(function(searchbycity) {
        return searchbycity.city.toLowerCase().indexOf(search_city.toLowerCase()) != -1
    });
    display(result);
}

function remove(ind)
{
    people.splice(ind,1);
    display(people);
}