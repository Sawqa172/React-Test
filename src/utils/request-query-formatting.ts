import _ from 'lodash';
import objectToQueryString from './object-to-query-string';

function requestQueryFormatting(sourceUrl: string, queryParams: object) {
  let formattedUrl = sourceUrl;

  if (!_.isEmpty(queryParams)) {
    // add query symbol
    formattedUrl += '?';
    // add params to source url
    formattedUrl += objectToQueryString(queryParams);
  }

  return formattedUrl;
}

export default requestQueryFormatting;
