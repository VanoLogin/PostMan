function urlToParamsArray(url) {
  const urlParamsPart = url.split("?")[1];

  if (!urlParamsPart) return [];

  const pairsArray = urlParamsPart.split("&");
  const newArray = pairsArray.map((pair) => pair.split("="));
  return newArray;
}

export { urlToParamsArray };
