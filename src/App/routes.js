export default {
  home: locale => `/${locale}`,
  homeArticle: (locale, id) =>
    id ? `/${locale}/article/${id}` : `/${locale}/article/:id`,
  categories: locale => `/${locale}/categories`,
  categoriesArticle: (locale, id) =>
    id
      ? `/${locale}/categories/article/${id}`
      : `/${locale}/categories/article/:id`,
  search: locale => `/${locale}/search`,
  searchQuery: (locale, query) =>
    query ? `/${locale}/search?${query}` : `/${locale}/search?`,
};
