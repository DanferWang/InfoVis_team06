
var dataArray = [66.9, 59.7, 60, 60.6, 62.3, 63.3, 64.3, 61.5, 63.8, 60.3, 66.9, 60.3, 62.2, 61.2, 66.6, 57.4, 59.1, 59.9, 71.7, 62.9, 66.3, 62.2, 61.2, 62.5, 60.7, 59.5, 67.1, 60.9, 66.1, 59.3, 68.2];



var margin = {top: 30, right: 30, bottom: 70, left: 65},
    width = 540 - margin.left - margin.right,
    height = 840 - margin.top - margin.bottom;

// append the svg object to the body of the page
var canvas = d3.select("#barchart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// genggai
var xdata = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus','Czech', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany',
'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Norway', 'Poland',
'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switerland', 'UK'];
c=dataArray.map((e,i)=>{return [e,xdata[i]]})

c.sort((x,y)=>{
    if(x[0]<y[0]){return 1;}else{return -1}
     })
b_new=c.map(e=>e[0])
a_new=c.map(e=>e[1])
a_new=a_new.reverse()
console.log(a_new)
var xScale3 = d3.scaleBand()
.domain(a_new)
.range([ height, 0]);

var xAxis3 = d3.axisLeft().scale(xScale3);
canvas.append('g')
.attr('trasform','translate(150,0)')
.call(xAxis3)
.selectAll("text")
.attr("dy", ".75em")
.attr('transform', 'rotate(25)');

var xScale1 = d3.scaleLinear()

.domain([0, 100])

.range([0, width - 155]);

var xAxis1 = d3.axisTop().scale(xScale1);

canvas.append('g')
.attr('trasform','translate(0,10)')
.call(xAxis1);



// jieshu
var bars = canvas.selectAll("rect")
    .data(b_new)
    .enter()
    .append("rect")
    .attr('class', 'base')
    .attr("width", function (d) {
        return d * 3;
    })
    .attr("height", 18)
    .attr("y", function (d, i) {
        return i * 24;
    })
    .attr("fill", function(d){return d > 80 ? '#0c2c84' :
      d > 75 ? '#225ea8' :
        d > 70 ? '#1d91c0' :
          d > 65 ? '#41b6c4' :
            d > 60 ? '#7fcdbb' :
              d > 55 ? '#c7e9b4' :
                d > 50 ? '#edf8b1' :
                  '#ffffcc';})
    
    .on('mouseover', function (d, i) {
    d3.select(this).transition()
       .duration('50')
       .attr('opacity', '.85');
    //Makes the new div appear on hover:
    div.transition()
       .duration(50)
       .style("opacity", 1);
     })
    
    .on('mouseout', function (d, i) {
      d3.select(this).transition()
           .duration('50')
           .attr('opacity', '1');});


function updatePlotBar(array) {

    var remove = d3.select("#barchart").select("svg").remove();
    var margin = {top: 30, right: 30, bottom: 70, left: 65},
    width = 540 - margin.left - margin.right,
    height = 840 - margin.top - margin.bottom;

// append the svg object to the body of the page
var canvas = d3.select("#barchart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// genggai
var xdata = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus','Czech', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany',
'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Norway', 'Poland',
'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switerland', 'UK'];
c=array.map((e,i)=>{return [e,xdata[i]]})

c.sort((x,y)=>{
    if(x[0]<y[0]){return 1;}else{return -1}
     })
b_new=c.map(e=>e[0])
a_new=c.map(e=>e[1])
a_new=a_new.reverse()
console.log(a_new)
var xScale3 = d3.scaleBand()
.domain(a_new)
.range([ height, 0]);

var xAxis3 = d3.axisLeft().scale(xScale3);
canvas.append('g')
.attr('trasform','translate(150,0)')
.call(xAxis3)
.selectAll("text")
.attr("dy", ".75em")
.attr('transform', 'rotate(25)');

var xScale1 = d3.scaleLinear()

.domain([0, 100])

.range([0, width - 155]);

var xAxis1 = d3.axisTop().scale(xScale1);

canvas.append('g')
.attr('trasform','translate(0,10)')
.call(xAxis1);




// jieshu
var bars = canvas.selectAll("rect")
    .data(b_new)
    .enter()
    .append("rect")
    .attr('class', 'base')
    .attr("width", function (d) {
        return d * 3;
    })
    .attr("height", 18)
    .attr("y", function (d, i) {
        return i * 24;
    })
    .attr("fill", function(d){return d > 80 ? '#0c2c84' :
      d > 75 ? '#225ea8' :
        d > 70 ? '#1d91c0' :
          d > 65 ? '#41b6c4' :
            d > 60 ? '#7fcdbb' :
              d > 55 ? '#c7e9b4' :
                d > 50 ? '#edf8b1' :
                  '#ffffcc';})

    .on('mouseover', function (d, i) {
    d3.select(this).transition()
       .duration('50')
       .attr('opacity', '.85');
    //Makes the new div appear on hover:
    div.transition()
       .duration(50)
       .style("opacity", 1);
     })
    
    .on('mouseout', function (d, i) {
      d3.select(this).transition()
           .duration('50')
           .attr('opacity', '1');});
}