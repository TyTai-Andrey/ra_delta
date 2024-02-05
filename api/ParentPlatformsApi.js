// Types
import BaseApi from './BaseApi';

export default class ParentPlatformsApi {
  static async getList(params) {
    const client = BaseApi.getClient();
    const options = {
      url: '/platforms/lists/parents',
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
}
