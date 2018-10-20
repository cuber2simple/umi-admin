import { delay } from 'roadhog-api-doc';

const jsonData = {
  "result": {
    "msg": "操作成功",
    "date": 1536768054052,
    "code": 200
  },
  "error_info": null,
  "is_success": true
};

const Api = {
  'POST /platform/role/add': (req, res) => {
    res.send(JSON.stringify(jsonData))
  },
  'POST /platform/role/update': (req, res) => {
    res.send(JSON.stringify(jsonData))
  },
  'POST /platform/role/delete': (req, res) => {
    res.send(JSON.stringify(jsonData))
  },
  'POST /platform/role/batch-delete': (req, res) => {
    res.send(JSON.stringify(jsonData))
  },
};
export default delay(Api,500)


