import axios from 'axios';
import cheerio from 'cheerio';
import {getPopularMemes, postPopularMeme} from './memestats_api_util';
import $ from 'jquery';

let proxy_url = "https://cors-anywhere.herokuapp.com/";
let base_url = "https://memegenerator.net/";

export const getMemeImages = () => {
  getPopularMemes.then((data) => {
    const memes =  Object.keys(data).map(key => data[key]);
    memes.forEach(meme => {
      axios.get(`${proxy_url}${base_url}${meme.url_name}`).then((res) => {
        let $cheerio = cheerio.load(res.data);
        const imgUrl = $cheerio('div.img-holder').children().first().attr('src');
        const updatedMeme = Object.assign({}, meme, {img_url: imgUrl});
        postPopularMeme(updatedMeme);
      });
    });
  });
};
