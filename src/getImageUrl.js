const getImageUrl = (path) => {
  return new URL(`../planets/${path}.png`, import.meta.url).href;
};

export default getImageUrl;
