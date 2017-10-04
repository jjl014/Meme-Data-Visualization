const d3 = require('d3');
import {getPopularMemes} from './util/memestats_api_util';

export const buildMemeChart = () => {
  let itemSize = 20,
      cellSize = itemSize - 1,
      margin = {top: 50, right: 50, bottom: 50, left: 50};

  let width = 800 - margin.right - margin.left,
      height = 600 - margin.top - margin.bottom;
  getPopularMemes.then((result) => {
    console.log(result);

    const xScale = d3.scaleOrdinal()
      .range(0, result.length/2);

    const yScale = d3.scaleOrdinal()
      .range(0, result.length/2);

    const svg = d3.select("#meme_bubble_chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top, margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const cells = svg.selectAll('rect')
      .data(result)
      .enter().append('svg:rect')
      .attr('class',' cell')
      .attr('width', cellSize)
      .attr('height', cellSize)
      .attr('y', '100')
      .attr('x', '100')
      .attr('fill', 'blue');

      console.log(cells);
  });
};

const createMemeItem = (data) => {

};
