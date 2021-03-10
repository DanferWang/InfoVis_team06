## Workflow

#### Week 3
- main.html: 1st version prototype

#### Week 4
- eumap_rev.html: 2nd version
    + modify to the template like airbnb.

#### Week 5
- LX.html
    + A simple and clean version for adding new features later.
    + Separate CSS and JS files.
    + Hover and highlight function of map.
    + Create a new geojson file based on /leaflet/europe.geojson and add Cyprus mannually, see europe31_withid.geojson.
    + Has been integrated with eumap_rev_linxiao.html.
    + slider could display the current value
    + slider could control the display of piechart
        * add this version in "piechart2.js" file
        * notice that the pie chart should be placed below the slider
        * make the pie chart colors match to the sliders

- eumap_rev_linxiao.html
    + A new box-shape interface.
    + Add a piechart and reorganize the modules.

- new (folder)
    + now we can run the flask server instead of live server
    + "submit" could update the heatmap in the middle, but with bug
        * 2 functions (one for update map, another for update bar chart) should be modified

- remaining work
    + barchart part is still static, should be interactive
    + solve the bug when showing heatmap
        * remove the submit button and only use slider
    + Add the legend in the pie chart and the bar chart.
    + search history(optional?)
    + elaborate the color and details of all elements