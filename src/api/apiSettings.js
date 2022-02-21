const BASE_URL = 'http://135.181.30.244:27007/api/';

const getSummaries = async page => {
  return await fetch(`${BASE_URL}summaries/?page=${page}`, {
    metod: 'GET',
  })
    .then(res => res.json())
    .then(res => res)
    .catch(e => e.message);
};

export default getSummaries;
