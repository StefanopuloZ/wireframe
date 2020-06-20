export default {
  home: locale => `/${locale}`,
  homeArticle: (locale, id) => id ? `/${locale}/article/${id}` : `/${locale}/article/:id`,
  search: (locale, query) => `/${locale}/search?${query}`,
};
