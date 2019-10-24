// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(tableData);


var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

function loadData() {
    tableData.forEach(aliens => {
        var row = tbody.append("tr")
        columns.forEach(column => {
            if (column == "city" || column == "state" || column == "country") {
                row.append("td").text(aliens[column].toUpperCase())
            }
            else row.append("td").text(aliens[column])
        })
    })
}
loadData()

var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");


// Reference the filter button on the page
var filterButton = d3.select("#filter-btn");

var resetButton = d3.select("#reset-btn");

// create a function for filtering the data with the given input
function filterData() {
    d3.event.preventDefault();

    var Datevalue = inputDate.property("value")
    var Cityvalue = inputCity.property("value")
    var Statevalue = inputState.property("value")
    var Countryvalue = inputCountry.property("value")
    var Shapevalue = inputShape.property("value")

    var filteredData = tableData.filter(function (recorded) {
        return ((recorded.datetime === Datevalue || Datevalue == "") &&
            (recorded.city === Cityvalue || Cityvalue == "") &&
            (recorded.state === Statevalue || Statevalue == "") &&
            (recorded.country === Countryvalue || Countryvalue == "") &&
            (recorded.shape === Shapevalue || Shapevalue == "")
        )
    })
    console.log(filteredData)

    // Empty the table to append with the filtered data
    tbody.text("")
    // update the table with the filtered data
    filteredData.forEach(aliens => {
        var row = tbody.append("tr")
        columns.forEach(column => {
            if (column == "city" || column == "state" || column == "country") {
                row.append("td").text(aliens[column].toUpperCase())
            }
            else row.append("td").text(aliens[column])
        })
    })
}

filterButton.on("click", filterData)

// create a function for resetting the table
function resetData() {
    tbody.text("")
    loadData()
}
// Add event handler for the reset button to reset the table to original data
resetButton.on("click", resetData)