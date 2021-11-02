const objectToQueryString = (params: object) =>
  Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

export default objectToQueryString;
