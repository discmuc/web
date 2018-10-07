'use strict';

let width = 500;
let height = 500;

let canvas = d3.select('svg')
    .attr('width', width)
    .attr('height', height);

let circle = canvas.append('circle')
    .attr('cx', 250)
    .attr('cy', 250)
    .attr('r', 125)
    .attr('fill', 'orange')
    .attr('stroke', 'red')
    .attr('stroke-width', 3);

circle
    .transition()
    .delay(3000)
    .duration(2000)
    .attr('r', 245)
    .transition()
    .delay(1500)
    .duration(2000)
    .attr('r', 125);

