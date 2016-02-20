var data = {
  labels: ['Website A', 'Website B', 'Website C', 'Website D', 'Website E', 'Website F'],
  datasets: [
    {
      label: "Sensitiviy (true positive rate)",
      fillColor: '#fff',
      strokeColor: '#fff',
      data: [62.8, 57.1, 43.6, 37.5, 32.3, 29.7]
    }
  ]
};

var options = {
  segmentShowStroke: false,
  animateScale: true,
  scaleFontColor: '#fff',
  scaleGridLineColor: '#fff'
}

var context = $('.ChartJSChart').get(0).getContext('2d');
var brandChart = new Chart(context).Bar(data, options);
