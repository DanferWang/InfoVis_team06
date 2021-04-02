// set the dimensions and margins of the graph
var width = 300
    height = 300
    margin = 20

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin
//var radius = width / 3
// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#donut-chart")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// create initial data_set
//var data1 = {a: 50, b: 50, c:50, d:50, e:50, f: 50}
        var data1 = [
          {indic: "EPI", value: 50},
          {indic: "COL", value: 50},
          {indic: "Inter", value: 50},
          {indic: "Popu", value: 50},
          {indic: "Saf", value: 50},     
          //{indic: "Education", value: 50},
          //{indic: "Air quality", value: 50},
        ];

// set the color scale
var color = d3.scaleOrdinal()
  .range(d3.schemeDark2);

// var color = d3.scaleOrdinal() // D3 Version 4
//   .domain(["EPI", "COL", "Inter","Popu"])
//   .range(["#1b9e77", "#d95f02" , "#7570b3", "#e7298a"]);

// A function that create / update the plot for a given variable:

var count = 0;
function updatepie() {
    if (count == 0){
      var data = data1;
    }
    else{
    var data = data1;
    data[0].value = document.getElementById("sEPI").value;
    data[1].value = document.getElementById("sCOL").value;
    data[2].value = document.getElementById("sInt").value;
    data[3].value = document.getElementById("sPop").value;
    data[4].value = document.getElementById("sSaf").value;}
    //data1[4].value = document.getElementById("sForest").value;
    //data1[5].value = document.getElementById("sAir").value;
  // Compute the position of each group on the pie:
  var pie = d3.pie()
    .value(function(d) {return d.value; })
    .sort(function(a, b) { console.log(a) ; return d3.ascending(a.key, b.key);} ) // This make sure that group order remains the same in the pie chart
  
  //var data_ready = pie(d3.entries(data1))
  var data_ready = pie(data)
  // map to data
  var u = svg.selectAll("path")
    .data(data_ready)

  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  u
    .enter()
    .append('path')
    .merge(u)
    .transition()
    .duration(10)
    .attr('d', d3.arc()
      .innerRadius(70)
      .outerRadius(radius)
    )
    .attr('fill', function(d,i){ return(color(i)) })

    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 1)

  // remove the group that is not present anymore
  u
    .exit()
    .remove()

  count = 1;

}



// Initialize the plot with the first dataset
updatepie()