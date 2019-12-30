import request from '../../../request/request';

export async function login(params) {
  params["merchant_id"] = "1015600000001";
  return request.post(request.api.platformLogin, params);
}
