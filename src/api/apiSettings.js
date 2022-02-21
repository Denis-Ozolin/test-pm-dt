const BASE_URL = 'http://135.181.30.244:27007/api/';

const getSummaries = page => {
  return fetch(`${BASE_URL}summaries/?photo=true/?page=${page}`, {
    metod: 'GET',
  })
    .then(res => res.json())
    .then(res => res)
    .catch(e => e.message);
};

export default getSummaries;
