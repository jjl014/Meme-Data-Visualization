import {selectByPopular} from './util/memegen_api_util';
import {postPopularMeme, updateMeme} from './util/memestats_api_util';

export const updatePopularMemes = (page, day) => {
  console.log("Trying to update Memes");
  selectByPopular(page, day)
    .then((data) => {
      if (data.result && data.result.length > 0) {
        data.result.forEach((meme, i) => {
          console.log(meme);
          postPopularMeme(meme);
        });
        console.log("Updated Mememes successfully");
      } else {
        console.log("Failed to grab data from memegenerator API");
      }
    });
};
