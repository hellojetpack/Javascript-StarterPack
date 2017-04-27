const getQueryStringParameterByName = (name, url) => {
  let urlS = url;
  if (!urlS) urlS = window.location.href;

  const nameS = name.replace(/[\[\]]/g, '\\$&'); // eslint-disable-line no-useless-escape

  const regex = new RegExp(`[?&]${nameS}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(urlS);

  if (!results) return null;
  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

const getBaseUrl = () => (getQueryStringParameterByName('useMockApi') ?
  'http://localhost:3001/' : '/');

export default getBaseUrl;
