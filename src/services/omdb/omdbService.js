import { cryptoUtil } from '../../util';
import { UnauthorizedError, InternalServerError, ResourceNotFoundError } from '../../constant/error';
import QueryString from 'qs';
import RequestMethod  from '../../helpers/requestMethods'
const key = process.env.APIKEY;

const search = async (headers, query, callback) => {
  const queryObject = {
    apikey: query.apikey,
    s: query.name
  }
  let url = `${process.env.BASE_URL_OMDB}?${QueryString.stringify(queryObject)}`;
  console.log(url)
  await RequestMethod.requestGet(url, (response) => callback(response))
};

const detail = async (headers, query, callback) => {
  const queryObject = {
    apikey: query.apikey,
    t: query.title
  }
  let url = `${process.env.BASE_URL_OMDB}?${QueryString.stringify(queryObject)}`;
  
  await RequestMethod.requestGet(url, (response) => callback(response))
};

const omdbService = {
  search,
  detail
};

export default omdbService;
