## MemeStats

### Background and Overview

Memes have become a global phenomenon over the years and it's become a way to express ourselves in our daily lives. MemeStats is an app that gives users a simple visualization of the popular memes that are used today as well as their origin and when they were created.

### Functionality and MVP

- [ ] Bubble graph representing all of the popular memes 
- [ ] The bubbles will be pictures of the memes sized depending on it's popularity
- [ ] Hovering over a bubble will display the stats, origin and date created

### Wireframes

![meme-bubble][]

### Architecture and Technologies

* ```Vanilla JS``` for general application logic
* ```D3.js``` for handling the DOM and creating visualizations
* Webpack to bundle and serve scripts
* [memegenerator API](http://version1.api.memegenerator.net/)

* ```memestats.js``` : entry file for the app
* ```util.js``` : handle the different ajax requests to memegenerator API
* ```bubble.js``` : bubble graph display for the meme stats

### Implementation Timeline

**Over the weekend**:
- [ ] Do research on D3.js
- [ ] Set up skeleton for project

**Day 1**:

- [ ] Set up a web scraper to get more information from [Knowyourmeme](knowyourmeme.com)
- [ ] Set up webpack
- [ ] Get used to how D3 works

**Day 2**: 

- [ ] Use D3 to start displaying basic dummy data in a bubble graph
- [ ] Use D3 to start displaying data pulled from the memegenerator API

**Day 3**: 

- [ ] Continue with D3 bubble graph and incorporate data scraped from Knowyourmeme
- [ ] Add mouseover effects to display more detailed information

**Day 4**: 

- [ ] Create animated transitions for hover effects
- [ ] Polish everything

### Bonus Features

- [ ] Make use of the different API methods to generate different visualizations
- [ ] Create a different way to visualize the data

[memestats-wireframe]:
