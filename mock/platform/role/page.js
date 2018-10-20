import { delay } from 'roadhog-api-doc';

const jsonData = {
  "result": {
    "items": [
      {
        "id": "417454619141211111",
        "role_name": "管理员1",
        "role_introduce": "管理员介绍111",
        "state_enum": "INACTIVE",
        "create_date": 1536739520111,
        "update_date": null
      },
      {
        "id": "417454619141211112",
        "role_name": "管理员2",
        "role_introduce": "管理员介绍222",
        "state_enum": "INACTIVE",
        "create_date": 1536739110111,
        "update_date": null
      }
    ],
    "total_count": 2,
    "page_index": 1,
    "page_size": 10
  },
  "error_info": null,
  "is_success": true
};

const Api = {
  'POST /platform/role/page': (req, res) => {
    res.send(JSON.stringify(jsonData))
  },
};
export default delay(Api,500)


