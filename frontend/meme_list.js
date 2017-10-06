const d3 = require('d3');
import {getPopularForMeme} from './util/memegen_api_util';

export const buildMemeList = (urlName, images) => {
  getPopularForMeme("", urlName).then((response) => {
    if (response.result && response.result.length > 0) {
      const data = Object.keys(response.result).map(key => response.result[key]);
      // d3.selectAll("li.meme-list-item").remove();
      // d3.selectAll("div.meme-list-item-container").remove();

      d3.select("div.meme-list").remove();

      const memeList = d3.select(".memes-container")
        .append("div")
        .attr("class","meme-list")
        .append("ul")
        .attr("class", "meme-list-ul");

      memeList.selectAll("li.meme-list-item")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "meme-list-item-container")
        .append("li")
        .attr("class", "meme-list-item")
        .append("img")
        .attr("src", (d)=> {
          return images[d.displayName];
        })
        .style("width", "100%")
        .style("height", "auto");

      d3.selectAll(".meme-list-item")
        .data(data)
        .append("p")
        .attr("class", "top-line meme-text")
        .html((d) => d.text0);
        // .style("position", "absolute");

      d3.selectAll(".meme-list-item")
        .data(data)
        .append("p")
        .attr("class", "bot-line meme-text")
        .html((d) => d.text1);
        // .style("position", "absolute");
    }
  });
};
