const getArticle = (articles, id) => {
  let article = articles.find(article => article.id === id);
  console.log('articleF', article);
  return article;
};

export const articleFunctions = {
  getArticle,
};
