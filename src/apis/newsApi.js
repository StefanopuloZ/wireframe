const key = '0687b8f4dc5a4f44b03a61c0dc222069';

const getTopHeadlines = ({ country }) => {
  const path = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`;
  const req = new Request(path);

  return new Promise((resolve, reject) => {
    fetch(req)
      .then(response => {
        resolve(response.json());
      })
      .catch(error => {
        reject(error);
      });
  });
};

const getCategoryHeadlines = ({ country, category }) => {
  const path = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${key}`;
  const req = new Request(path);

  return new Promise((resolve, reject) => {
    fetch(req)
      .then(response => {
        resolve(response.json());
      })
      .catch(error => {
        reject(error);
      });
  });
};

const searchTopHeadlines = ({ country, query }) => {
  const path = `https://newsapi.org/v2/top-headlines?country=${country}&q=${query}&apiKey=${key}`;
  const req = new Request(path);

  return new Promise((resolve, reject) => {
    fetch(req)
      .then(response => {
        resolve(response.json());
      })
      .catch(error => {
        reject(error);
      });
  });
};

const NewsApi = {
  getTopHeadlines,
  getCategoryHeadlines,
  searchTopHeadlines,
};

export default NewsApi;
