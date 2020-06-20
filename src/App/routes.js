export default {
  home: locale => `/${locale}`,
  homeArticle: locale => `/${locale}/article/:id`,
  search: (locale, query) => `/${locale}/search?${query}`,
};
