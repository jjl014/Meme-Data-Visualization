import $ from 'jquery';

export const postPopularMeme = ({
  name,
  url_name,
  instances_count,
  ranking,
  total_votes,
  img_url }) => {
    const meme = {
      name,
      url_name,
      instances_count,
      ranking,
      total_votes,
      img_url
    };
    return $.ajax({
      method: 'POST',
      url: '/api/memes',
      data: {meme}
    });
};

export const updatePopularMeme = ({
  displayName,
  urlName,
  instancesCount,
  ranking,
  entityVotesSummary}) => {
    const meme = {
      name: displayName,
      url_name: urlName,
      instances_count: instancesCount,
      ranking,
      total_votes: entityVotesSummary['totalVotesSum']
    };
    return $.ajax({
      method: 'PATCH',
      url: '/api/memes',
      data: {meme}
    });
};

export const getPopularMemes = (
  $.ajax({
    method: 'GET',
    url: '/api/memes'
  })
);
