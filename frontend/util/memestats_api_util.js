import $ from 'jquery';

export const postPopularMeme = ({
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
      method: 'POST',
      url: '/api/memes',
      data: {meme}
    });
};

export const updatePopularMemes = ({
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
