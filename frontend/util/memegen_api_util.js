import $ from 'jquery';

const API_KEY = "2db6b651-e3e1-4f42-819f-b5e2614a5680";
const API_KEY2 = "cb4ebfd1-2674-48e1-ab7c-267873f3f303";
const API_URL = "http://version1.api.memegenerator.net/";

export const selectByPopular = (page, days) => (
  $.ajax({
    method: 'GET',
    url: `${API_URL}Generators_Select_ByPopular`,
    data: { pageIndex: page,
            pageSize: 25,
            days: days,
            apiKey: API_KEY2}
  })
);

export const selectByTrending = (page, days) => ({

});

export const selectByRecentlyCaptioned = (page, days) => ({

});

export const selectByNew = (page, days) => ({

});
