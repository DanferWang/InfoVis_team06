// ! Everything before the function "updatePlotBar" could be delete
// since it would automaticly call the function initially
// ===========================================================================
// ===========================================================================
var dataArray = [66.9, 59.7, 60, 60.6, 62.3, 63.3, 64.3, 61.5, 63.8, 60.3, 66.9, 60.3, 62.2, 61.2, 66.6, 57.4, 59.1, 59.9, 71.7, 62.9, 66.3, 62.2, 61.2, 62.5, 60.7, 59.5, 67.1, 60.9, 66.1, 59.3, 68.2];



var margin = {top: 30, right: 30, bottom: 70, left: 65},
    width = 540 - margin.left - margin.right,
    height = 840 - margin.top - margin.bottom;
// the div show the tooltip (popup during mouseover)
var div = d3.select("#barchart").append("div").attr("class", "toolTip");

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
    
    .on("mouseover", function(d, i) {


        d3.select(this).attr("fill", "DarkOrange");
    })

    .on("mousemove", function(d, i) {

    })
    .on("mouseout", function(d) {
    });
// ===========================================================================

// ===========================================================================
function updatePlotBar(array) {

    var remove = d3.select("#barchart").select("svg").remove();
    var remove1 = d3.select("#barchart").select("div").remove();
    var margin = {top: 30, right: 30, bottom: 70, left: 65},
    width = 540 - margin.left - margin.right,
    height = 840 - margin.top - margin.bottom;
    var div = d3.select("#barchart").append("div").attr("class", "toolTip");
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
'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'UK'];
combin=array.map((e,i)=>{return [e,xdata[i]]})

combin.sort((x,y)=>{
    if(x[0]<y[0]){return 1;}else{return -1}
     })
// a_new to store country name
// a_new reverse in order to plot
// b_new to store score value
b_new=combin.map(e=>e[0])
a_new=combin.map(e=>e[1])
tmp_a=combin.map(e=>e[1])
// tmp_a use to show tooltip
a_new.reverse()



// ==== arrange data in new ds ====
// so that we could use this in tooltip and even maybe connect with map by country name
// c in it represent: country name
// value represent: score
var data_t = [{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},
{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},
{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},
{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},
{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},
{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},{c:"Austria",value:50},
{c:"Austria",value:50},];
// replace the correct country name and score in it
for (var i = 0; i < tmp_a.length; i++) {
data_t[i].c = tmp_a[i];
data_t[i].value = b_new[i];
}

// ================================
// function for interactive with map

function newstyle_inbar(feature) {
return {
  fillColor: newColor(feature.properties.scores),
  weight: 2,
  color: 'white',
  fillOpacity: 0.75
};
}
function resetHighlight_inbar(layer) {
  geojson.resetStyle(layer);
  info.update();
}

// =======draw the coordinate======
// y 
var xScale3 = d3.scaleBand()
.domain(a_new)
.range([ height, 0]);
// x
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
    .data(data_t)
    .enter()
    .append("rect")
    .attr('class', 'base')
    .attr("width", function (d) {
        return d.value * 3;
    })
    .attr("height", 18)
    .attr("y", function (d, i) {
        return i * 24;
    })
    .attr("fill", function(d){return d.value > 80 ? '#0c2c84' :
      d.value > 75 ? '#225ea8' :
        d.value > 70 ? '#1d91c0' :
          d.value > 65 ? '#41b6c4' :
            d.value > 60 ? '#7fcdbb' :
              d.value > 55 ? '#c7e9b4' :
                d.value > 50 ? '#edf8b1' :
                  '#ffffcc';})
    .on("mouseover", function(d, i) {
        var num = i+1;
        div.style("left", d3.event.pageX+10+"px");
        div.style("top", d3.event.pageY-25+"px");
        div.style("display", "inline");
        div.style("opacity", 1)
        div.html("Rank: "+num+"<br>"+"Country: "+(d.c)+"<br>"+"Score: "+(d.value));
        d3.select(this).attr("fill", "DarkOrange");

        geojson.eachLayer(function (layer) {  
          if(layer.feature.id == d.c) {    
                layer.setStyle({
                weight: 5,
                color: '#666',
                dashArray: '',
                fillOpacity: 0.7
                });

          if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront(); }
          
          info.update(layer.feature.properties);
          }
        
        });

    })

    .on("mousemove", function(d, i) {
        var num = i+1;
        div.style("left", d3.event.pageX+10+"px");
        div.style("top", d3.event.pageY-25+"px");
        div.style("display", "inline");
        div.style("opacity", 1)
        div.html("Rank: "+num+"<br>"+"Country: "+(d.c)+"<br>"+"Score: "+(d.value));
        d3.select(this).attr("fill", "DarkOrange");
    })
    .on("mouseout", function(d) {
        div.style("display", "none");
        div.style("opacity", 0)
        d3.select(this).attr("fill", function(d){return d.value > 80 ? '#0c2c84' :
            d.value > 75 ? '#225ea8' :
                d.value > 70 ? '#1d91c0' :
                  d.value > 65 ? '#41b6c4' :
                    d.value > 60 ? '#7fcdbb' :
                      d.value > 55 ? '#c7e9b4' :
                        d.value > 50 ? '#edf8b1' :
                          '#ffffcc';});
        geojson.eachLayer(function (layer) {  
          if(layer.feature.id != "nothing") {    
                geojson.resetStyle(layer);
                info.update();
          }
        
        });


    });

}