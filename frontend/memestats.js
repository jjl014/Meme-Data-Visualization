import {selectByPopular, getPopularForMeme} from './util/memegen_api_util';
import {getMemeImages} from './util/meme_scraper';
import {updatePopularMemes} from './update';
import {buildMemeChart} from './meme_charts';

document.addEventListener("DOMContentLoaded", () => {
  window.selectByPopular = selectByPopular;
  window.updatePopularMemes = updatePopularMemes;
  window.setTimeout(() => {
    for(let i = 0; i < 4; i++) {
      updatePopularMemes(i.toString(), "");
    }
  });
  getMemeImages();

  const images = {};
  buildMemeChart(images);
});
