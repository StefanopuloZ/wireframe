const getArticle = (articles, id) => {
  return articles.find(article => article.id === id);
};

const createId = title => {
  return title
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, '')
    .replace(/[ ]/g, '-')
    .slice(0, 40);
};

const mapIdsToArticles = articles => {
  return articles.map(article => {
    article.id = createId(article.title);
    return article;
  });
};

export const articleFunctions = {
  getArticle,
  createId,
  mapIdsToArticles,
};
