/*
var dataArray = [70, 57, 45, 40, 30, 20];

var canvas = d3.select("#barchart")
    .append("svg")
    .attr("width", 900).attr("height", 500);
*/
// var width = 380;
// var height = 900;
// var padding = { left: 30, right: 30, top: 20, bottom: 20 };
// //矩形所占的宽度（包括空白）
// var rectStep = 35;
// //矩形所占的宽度（不包括空白）
// var rectWidth = 30;

// var yScale = d3.scale.linear()
//     .domain([0, d3.max(dataArray)])
//     .range([height - padding.top - padding.bottom, 0]);
// var yAxis = d3.svg.axis()
//     .scale(yScale)
//     .orient("left");

// var dataArray = [10, 57, 45, 40, 30, 20, 60, 50, 30, 40, 50, 40];

// var canvas = d3.select("#barchart")
//     .append("svg")
//     .attr("width", 380 - 50).attr("height", 900);



// var bars = canvas.selectAll("rect")
//     .data(dataArray)
//     .enter()
//     .append("rect")
//     .attr('class', 'base')
//     .attr("width", function (d) {
//         return d * 5;
//     })
//     .attr("height", 25)
//     .attr("y", function (d, i) {
//         return i * 40;
//     })
//     .attr("fill", "#4CAF50");

//     bars.append("text")
//     .text(function(d){return d;})
//     .attr({
//         "x":function(d){return scale(d)},
//         "y":25/2,
//         "text-anchor":"end"
//     })



var data = [10, 57, 45, 40, 30, 20, 60, 50, 30, 40, 50, 40],
    bar_height = 50,
    bar_padding = 10,
    height = (bar_height + bar_padding) * data.length,
    width = 380;

var area = ['张三','李四','王五']
var scale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

var svg = d3.select("#barchart")
    .append("svg").attr("width", 380).attr("height", 900)

var bar = svg.selectAll("g").data(data).enter().append("g").attr("transform", function (d, i) {
    return "translate(0," + i * (bar_height + bar_padding) + ")";
})

bar.append("rect").attr("width", function (d) { return  d * 5; })
    .attr("height", 25
    ).style("fill", "steelblue")

bar.append("text").text(function (d,index) { 
    console.log("----------",d,index)
    if(index<area.length)
        return area[index]+ d
     return "张三" + d; }).attr("x", function (d) { return 10 }).attr("y", 16)



/*
canvas.append("text")
    .text(function(d){
        return d;
    }).attr;
*/

//.attr("fill-width", "black");
function updatePlotBar(array) {
    // var dataArray = [70, 57, 45, 40, 30, 20,60,50,30,40,50,40];
    console.log("---------", array);
    var xp = d3.scale.ordinal()
        .domain(data.map(function (d) {
            return d.items;
        }))
        .rangeRoundBands([0, width - padding.left - padding.right], 0.1);

    var yp = d3.scale.linear()
        .domain([0, d3.max(datavalue)])
        .range([height - padding.top - padding.bottom, 0]) //反过来？为什么呢（之前似乎讲过哦0w0）

    var xAxis = d3.svg.axis()
        .scale(xp)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(yp)
        .orient("left");

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