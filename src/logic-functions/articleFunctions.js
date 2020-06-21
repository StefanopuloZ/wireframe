const getArticle = (articles, id) => {
  return articles.find(article => article.id === id);
};

export const articleFunctions = {
  getArticle,
};
