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
  search: locale => `/${locale}/search`,
  searchQuery: (locale, query) =>
    query ? `/${locale}/search?${query}` : `/${locale}/search?`,
};
