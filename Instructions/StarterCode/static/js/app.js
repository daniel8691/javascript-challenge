// from data.js
var tableData = data;
console.log(tableData)
var tableBody = d3.select("tbody")

// var date = new Date("2015-01-11");

// YOUR CODE HERE!
tableData.map(function(someData){
    var row = tableBody.append("tr")
    // console.log(someData)
    Object.entries(someData).forEach(function([key,value]){
        row.append("td").text(value)
    })


    
})



var inputElement = d3.select("#datetime")
var filterButton = d3.select("#filter-btn")

inputElement.on("change", runFunction)
filterButton.on("click", runFunction)
  

function runFunction() {


     // prevent page from refreshing
    d3.event.preventDefault();

    // remove the kids
    tableBody.html("")

     var inputValue = inputElement.property("value");
     console.log(inputValue)
 
     var filteredData = tableData.filter(function(UFO_data){
         return UFO_data.datetime == inputValue;
     });
     console.log(filteredData);
 
 
 
     filteredData.map(function(Goof){
         var row = tableBody.append("tr")
 
         Object.entries(Goof).forEach(function([key,value]){
             row.append("td").text(value)
         })
     })
}




