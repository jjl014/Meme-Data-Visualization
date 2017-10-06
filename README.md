# MemeStats

[MemeStats Live][heroku]

## Background and Overview

Memes have become a global phenomenon over the years and it's become a way to express ourselves in our daily lives. MemeStats is an app that gives users a simple visualization of the popular memes that are used today as well as their origin and when they were created.

## Features

MemeStats utilizes [D3][d3] to create an interactive bubble chart. Additional libraries used from D3 were [D3-drag][d3-drag] and [D3-force][d3-force]. [Axios][axios] and [Cheerio][cheerio] were also employed to scrape for additional information and data. The app also makes use of the memegenerator API which was very unstable, so response data was saved to a Rails backend. The size of each bubble is related to the usage count for each meme.

## Main Page

You can drag the different meme bubbles around and watch them interact with one another.

![MemeStats Main][memestats-main]

```javascript
defs.selectAll(".meme-pattern")
  .data(nodes)
  .enter().append("pattern")
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

bubbles = svg.selectAll(".meme")
  .data(nodes)
  .enter().append("circle")
  .attr("class","meme")
  .attr("r", (d) => radiusScale(d.value))
  .attr("cx", (d) => d.x)
  .attr("cy", (d) => d.y)
  .attr("fill", (d) => `url(#${d.url_name})`)
```

The bubbles were created by attaching svg images to each circle within the chart using patterns to make it reusable.

## Meme List

You can double click on a meme bubble and it will generate a list of popular memes that were created using it. 

![MemeStats List][memestats-list]


### Future Directions

* Optimization for the image bubbles
* Allow users to create Memes
* Store data about meme usage information to generate a better real time visualization
* Different charts for a more full experience

[heroku]: http://memestats.herokuapp.com/
[memestats-main]: https://github.com/jjl014/MemeStats/blob/master/docs/memestats-main.png
[memestats-list]: https://github.com/jjl014/MemeStats/blob/master/docs/memestats-list.png
[d3]: https://github.com/d3/d3
[d3-force]: https://github.com/d3/d3-force
[d3-drag]: https://github.com/d3/d3-drag
[axios]: https://github.com/axios/axios
[cheerio]: https://github.com/cheeriojs/cheerio
