export const seoFriendly = (title: string, id: number): string =>
  `${title.toLowerCase().replace(/ /g, '-')}-${id}`
