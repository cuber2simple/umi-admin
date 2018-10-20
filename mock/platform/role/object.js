import { delay } from 'roadhog-api-doc';

const jsonData = {
  "result": {
    "id": "417454619141211111",
    "role_name": "管理员1",
    "role_introduce": "管理员介绍1",
    "create_date": 1536739520111
  },
  "error_info": null,
  "is_success": true
};

const Api = {
  'GET /platform/role/object': (req, res) => {
    res.send(JSON.stringify(jsonData))
  },
};
export default delay(Api,500)


