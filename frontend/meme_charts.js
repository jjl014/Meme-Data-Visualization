const d3 = require('d3');
import {getPopularMemes} from './util/memestats_api_util';

export const buildMemeChart = () => {

  let svg = null;
  let bubbles = null;
  let nodes = [];
  let defs = null;

  let margin = {top: 50, right: 50, bottom: 50, left: 50};

  let width = 900 - margin.right - margin.left,
      height = 600 - margin.top - margin.bottom;

  let center = {x: width/2, y: height/2};

  let forceStrength = 0.15;

  const ticked = () => {
    bubbles
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y);
  };

  getPopularMemes.then((result) => {
    const data = Object.keys(result).map(key => result[key]);

    const maxAmount = d3.max(data, (d) => +d.instances_count);

    const radiusScale = d3.scaleSqrt()
      .domain([0, maxAmount])
      .range([10,80]);


    nodes = data.map((d) => {
      return {
        id: d.id,
        radius: radiusScale(+d.instances_count),
        value: +d.instances_count,
        name: d.name,
        url_name: d.url_name,
        img_url: d.img_url,
        ranking: d.ranking,
        totalVotes: d.total_votes,
        x: Math.random() * width,
        y: Math.random() * height
      };
    });

    const simulation = d3.forceSimulation()
    .velocityDecay(0.5)
    .force('x', d3.forceX(center.x).strength(forceStrength))
    .force('y', d3.forceY(center.y).strength(forceStrength))
    .force("collide", d3.forceCollide((d) => radiusScale(d.value) + 1));

    nodes = nodes.sort((a,b) => (b.value - a.value));

    svg = d3.select("#meme_bubble_chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    defs = svg.append("defs");

    defs.selectAll(".meme-pattern")
      .data(nodes)
      .enter().append('pattern')
      .attr("class", "meme-pattern")
      .attr("id", (d) => d.url_name)
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
      .append("image")
      .attr("xmlns:xlink", "https://www.w3.org/1999/xlink")
      .attr("xlink:href", (d) => d.img_url)
      .attr("height", 1)
      .attr("width", 1)
      .attr("preserveAspectRatio", "none");
      // .attr("x", 100)
      // .attr("y", 100)

    bubbles = svg.selectAll('.meme')
      .data(nodes)
      .enter().append('circle')
      .attr('class','meme')
      .attr('r', 10)
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr('fill', (d) => `url(#${d.url_name})`)
      .on('click', (d) => console.log(d))
      .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));


    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d3.select(this)
        .raise().
        classed("active", true);
    }

    function dragged(d) {
      d3.select(this)
        .attr("cx", d.x = d3.event.x)
        .attr("cy", d.y = d3.event.y);
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0).restart();
      d3.select(this)
        .classed("active", false);
    }

    bubbles
      .transition()
      .duration(2000)
      .attr('r', (d) => radiusScale(d.value));

    simulation
      .nodes(nodes)
      .on('tick', ticked);
  });
};

const createMemeItem = (data) => {

};
