/*
var dataArray = [70, 57, 45, 40, 30, 20];

var canvas = d3.select("#barchart")
    .append("svg")
    .attr("width", 900).attr("height", 500);
*/
var dataArray = [66.9, 59.7, 60, 60.6, 62.3, 63.3, 64.3, 61.5, 63.8, 60.3, 66.9, 60.3, 62.2, 61.2, 66.6, 57.4, 59.1, 59.9, 71.7, 62.9, 66.3, 62.2, 61.2, 62.5, 60.7, 59.5, 67.1, 60.9, 66.1, 59.3, 68.2];

var canvas = d3.select("#barchart")
    .append("svg")
    .attr("width", 380).attr("height", 900);



var bars = canvas.selectAll("rect")
    .data(dataArray)
    .enter()
    .append("rect")
    .attr('class', 'base')
    .attr("width", function (d) {
        return d * 5;
    })
    .attr("height", 25)
    .attr("y", function (d, i) {
        return i * 40;
    })
    .attr("fill", "#4CAF50");




/*
canvas.append("text")
    .text(function(d){
        return d;
    }).attr;
*/

// var dataArray1 = [30, 25, 20, 15, 10, 5];

// var bars1 = canvas.selectAll("rect.addon")
//     .data(dataArray1)
//     .enter()
//     .append("rect")
//     .attr('class', 'addon')
//     .attr("width", function (d) {
//         return d * 10;
//     })
//     .attr("height", 25)
//     .attr("y", function (d, i) {
//         return (i * 70) + 5;
//     })
//     .attr("fill", "orange");
//.attr("fill-width", "black");
function updatePlotBar(array) {
    // var dataArray = [70, 57, 45, 40, 30, 20,60,50,30,40,50,40];
    console.log(array);
    var remove = d3.select("#barchart").select("svg").remove();
    var canvas = d3.select("#barchart")
        .append("svg")
        .attr("width", 380).attr("height", 1800);



    var bars = canvas.selectAll("rect")
        .data(array)
        .enter()
        .append("rect")
        .attr('class', 'base')
        .attr("width", function (d) {
            return d * 5;
        })
        .attr("height", 25)
        .attr("y", function (d, i) {
            return i * 40;
        })
        .attr("fill", "#4CAF50");

}