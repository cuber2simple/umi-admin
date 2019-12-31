import { login } from '../services/index';
import { message } from 'antd';
import router from 'umi/router';
import { isSuccess, platformToken, resp_code, success_code } from '../../../common/globalConstant';

export default {
  namespace: 'loginToNamespace',
  state: {},
  subscriptions: {},
  effects: {
    * platformLogin({ payload }, { call }) {
      const response = yield call(login, payload);
      if (response && response[resp_code] === success_code) {
        const token = response.data.accessToken;
        sessionStorage.setItem(platformToken, token);
        router.push('/');
      } else if (response && response[resp_code] != success_code) {
        message.error(response['resp_msg']);
      }
    },
  },
  reducers: {},
};
