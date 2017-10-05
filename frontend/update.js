import {selectByPopular} from './util/memegen_api_util';
import {postPopularMeme, updateMeme} from './util/memestats_api_util';

export const updatePopularMemes = (page, day) => {
  selectByPopular(page, day)
    .then((data) => {
      if (data.result && data.result.length > 0) {
        data.result.forEach((meme, i) => {
          postPopularMeme({
            name: meme.displayName,
            url_name: meme.urlName,
            instances_count: meme.instancesCount,
            ranking: meme.ranking,
            total_votes: meme.entityVotesSummary['totalVotesSum']
          });
        });
      }
    });
};
