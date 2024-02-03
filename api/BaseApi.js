import axios from 'axios';

export default class BaseApi {
  static getClient() {
    return axios.create({
      baseURL: 'https://api.rawg.io/api',
      headers: {
        Accept: 'application/json',
      },
      params: {
        key: '7dcb6f1da7f74a5786b46a791a0965ca',
      },
    });
  }
}
