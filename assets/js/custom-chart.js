var data = [62.8, 57.1, 43.6, 37.5, 32.3, 29.7];

var data = [
  {label: 'Website A', value: 62.8}, 
  {label: 'Website B', value: 57.1},
  {label: 'Website C', value: 43.6},
  {label: 'Website D', value: 37.5},
  {label: 'Website E', value: 32.3},
  {label: 'Website F', value: 29.7}
];

var margin = {top: 25, right: 0, bottom: 50, left: 25},
    width = 308 - margin.right - margin.left,
    height = 379 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom');

var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left')
    .ticks(15);

var chart = d3.select('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

x.domain(data.map(function(d) { return d.label; }));
y.domain([0,70]);

chart.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis)
  .selectAll('text')
    .attr('x', 0)
    .attr('y', 10)
    .attr('dy', '.35em')
    .attr('transform', 'rotate(-55)')
    .style('text-anchor', 'end');

chart.append('g')
    .attr('class', 'y axis')
    .call(yAxis)
  .append('text')
    .attr('x', -25)
    .attr('y', -23)
    .attr('dy', '.71em')
    .text('Sensitivity (true positive rate)');
