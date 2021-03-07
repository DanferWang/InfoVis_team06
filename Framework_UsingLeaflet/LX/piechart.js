
// 绘制饼图
// var dataset = {
//   apples: [53245, 28479, 19697, 24037, 40245],
// };

// var width = 460,
//     height = 300,
//     radius = Math.min(width, height) / 2;

// var color = d3.scale.category20();

// var pie = d3.layout.pie()
//     .sort(null);

// var arc = d3.svg.arc()
//     .innerRadius(radius - 100)
//     .outerRadius(radius - 50);

// var svg = d3.select("donut-chart").append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .append("g")
//     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// var path = svg.selectAll("text")
//     .data(pie(dataset.apples))
//   .enter().append("path")
//     .attr("fill", function(d, i) { return color(i); })
//     .attr("d", arc);

var width = 380, height = 350;
var data = [10, 20, 50, 30, 80];
// sort函数自动隐式执行降序排列，而且数据从顶部开始顺时针展示，传入null可以阻止排序
var pie = d3.layout.pie().sort(null);
//定义了10中颜色主题
var color = d3.scale.category10();
var svg = d3.select("#donut-chart").append("svg").attr("width", width).attr("height", height );
//定义外半径
var outerRadius = width / 3;
//定义内半径
var innerRadius = width / 4;
//定义路径
var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

//定义了另一种路径函数
var arc2 = d3.svg.arc()
    .innerRadius(innerRadius - 10)
    .outerRadius(outerRadius + 20)

var arcs = svg.selectAll("g")
    .data(pie(data))
    .enter()
    .append("g")
    // 将饼图中心(SVG起点)移至中间
    .attr("transform", "translate(" + (outerRadius+50)  + "," + (outerRadius+30) + ")")
    //为每一块元素添加鼠标事件
    .on("mouseover", function(d) {

        d3.select(this).select("path").transition().attr("d", function(d) {
            console.log(d);
            return arc2(d);
        })
    })
    .on("mouseout", function(d){
        d3.select(this).select("path").transition().attr("d", function(d){
            return arc(d);
        })
    })
arcs.append("path")
    .attr("fill", function(d, i) {
        return color(i);
    })
    .attr("d", function(d) {
        return arc(d);
    })
arcs.append("text")
    .attr("transform", function(d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function(d) {
        return d.value;
    })