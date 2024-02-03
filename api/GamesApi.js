// Types
import BaseApi from './BaseApi';

export default class GamesApi {
  static async getList(params) {
    const client = BaseApi.getClient();
    const options = {
      url: '/games',
      method: 'GET',
      params,
    };

    try {
      const response = await client(options);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async getGamebyId(id) {
    const client = BaseApi.getClient();
    const options = {
      url: `/games/${id}`,
      method: 'GET',
    };

    try {
      const response = await client(options);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async getScreenshotsGamebyId(id) {
    const client = BaseApi.getClient();
    const options = {
      url: `/games/${id}/screenshots`,
      method: 'GET',
    };

    try {
      const response = await client(options);

      return response.data;
    } catch (error) {
      return error;
    }
  }
}
