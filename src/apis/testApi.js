const key = '0687b8f4dc5a4f44b03a61c0dc222069';

const url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=${key}`;

const req = new Request(url);

const testFetch = () => {
  return new Promise((resolve, reject) => {
    fetch(req)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          resolve(response.json());
        } else {
          reject(
            Error(
              response.statusText !== '' ? response.statusText : response.status
            )
          );
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

const TestApi = {
  testFetch,
};

export default TestApi;
