export default {
  home: locale => `/${locale}`,
  homeArticle: (locale, id) =>
    id ? `/${locale}/article/${id}` : `/${locale}/article/:id`,
  categories: locale => `/${locale}/categories`,
  categoriesCategory: (locale, category) =>
    category
      ? `/${locale}/categories/${category}`
      : `/${locale}/categories/:category`,
  categoriesArticle: (locale, id, category) =>
    id && category
      ? `/${locale}/categories/${category}/article/${id}`
      : `/${locale}/categories/:category/article/:id`,
  search: (locale, query) => query ? `/${locale}/search?q=${query}` : `/${locale}/search`,
  searchTerm: (locale, term) => `/${locale}/search/${term}`,
  searchArticle: (locale, term, id) =>
    id && term
      ? `/${locale}/search/${term}/article/${id}`
      : `/${locale}/search/:term/article/:id`,
};
