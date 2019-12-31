import { delay } from 'roadhog-api-doc';

const Api = {
  'POST /ums/token/login': (req, res) => {

    const { user_name, password } = req.body;

    const randomValue = parseInt(Math.random() * 100, 10);

    if (user_name === 'admin' && password === '123456' && randomValue > 5) {
      res.send(JSON.stringify({
        'resp_code': '0000',
        'data': {
          'accessToken': 'cd534924c12561de4eb948531a7fdeb9',
        },
        'resp_msg': '登陆成功',
      }));

    } else {
      res.send(JSON.stringify({
        'resp_msg': '登陆失败',
        'result': null,
        'resp_code': '0001',
      }));
    }


  },
};

export default delay(Api, 1000);
