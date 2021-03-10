/*
var dataArray = [70, 57, 45, 40, 30, 20];

var canvas = d3.select("#barchart")
    .append("svg")
    .attr("width", 900).attr("height", 500);
*/
var dataArray = [70, 57, 45, 40, 30, 20,60,50,30,40,50,40];

var canvas = d3.select("#barchart")
    .append("svg")
    .attr("width", 380).attr("height", 900);



var bars = canvas.selectAll("rect")
    .data(dataArray)
    .enter()
    .append("rect")
    .attr('class', 'base')
    .attr("width", function (d) {
        return d * 10;
    })
    .attr("height", 35)
    .attr("y", function (d, i) {
        return i * 70;
    })
    .attr("fill", "#4CAF50");




/*
canvas.append("text")
    .text(function(d){
        return d;
    }).attr;
*/

var dataArray1 = [30, 25, 20, 15, 10, 5];

var bars1 = canvas.selectAll("rect.addon")
    .data(dataArray1)
    .enter()
    .append("rect")
    .attr('class', 'addon')
    .attr("width", function (d) {
        return d * 10;
    })
    .attr("height", 25)
    .attr("y", function (d, i) {
        return (i * 70) + 5;
    })
    .attr("fill", "orange");
    //.attr("fill-width", "black");
function updatePlotBar(array){
    // var dataArray = [70, 57, 45, 40, 30, 20,60,50,30,40,50,40];

var canvas = d3.select("#barchart")
    .append("svg")
    .attr("width", 380).attr("height", 900);



var bars = canvas.selectAll("rect")
    .data(array)
    .enter()
    .append("rect")
    .attr('class', 'base')
    .attr("width", function (d) {
        return d * 10;
    })
    .attr("height", 35)
    .attr("y", function (d, i) {
        return i * 70;
    })
    .attr("fill", "#4CAF50");

}