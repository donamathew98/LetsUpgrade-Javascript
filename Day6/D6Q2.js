window.onload = function()
{
    let bus = [];
    if (localStorage.getItem("Bus") == null)
    {
        localStorage.setItem("Bus", JSON.stringify(bus));
    }
}

function display(arr = undefined)
{
    let tabledata = "";
    let Bus;
    if (arr == undefined)
    {
        bus = JSON.parse(localStorage.getItem("Bus"));
    }
    else
    {
        bus = arr;
    }
    bus.forEach(function(element, index) {
        let currentrow = `<tr> 
        <td>${index + 1}</td>
        <td>${element.name}</td>
        <td>${element.source}</td>
        <td>${element.destination}</td>
        <td>${element.number}</td>
        <td>${element.passengers}</td>
        </tr>`;
        tabledata += currentrow;
    });
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}

display()

function addBus(e)
{
    e.preventDefault();
    let obj = {};
    let name = document.getElementsByClassName("input")[0].value;
    let source = document.getElementsByClassName("input")[1].value;
    let destination = document.getElementsByClassName("input")[2].value;
    let number = document.getElementsByClassName("input")[3].value;
    let passengers = document.getElementsByClassName("input")[4].value;
    obj.name = name;
    obj.source = source;
    obj.destination = destination;
    obj.number = Number(number);
    obj.passengers = passengers;
    
    let bus = JSON.parse(localStorage.getItem("Bus"));
    bus.push(obj);
    localStorage.setItem("Bus", JSON.stringify(bus));
    
    display();

    document.getElementsByClassName("input")[0].value = "";
    document.getElementsByClassName("input")[1].value = "";
    document.getElementsByClassName("input")[2].value = "";
    document.getElementsByClassName("input")[3].value = "";
    document.getElementsByClassName("input")[4].value = "";
}

function source_search()
{
    let search_source = document.getElementsByClassName("search")[0].value;
    let arr = JSON.parse(localStorage.getItem("Bus"));
    let searchbysource = arr.filter(function(element) {
        return (element.source.toLowerCase().indexOf(search_source.toLowerCase()) != -1);
    });
    display(searchbysource);
}

function destination_search()
{
    let search_des = document.getElementsByClassName("search")[1].value;
    let arr = JSON.parse(localStorage.getItem("Bus"));
    let searchbydes = arr.filter(function(element) {
        return (element.destination.toLowerCase().indexOf(search_des.toLowerCase()) != -1);
    });
    console.log(search_des);
    display(searchbydes);
}