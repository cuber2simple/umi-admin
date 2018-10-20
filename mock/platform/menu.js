import { delay } from 'roadhog-api-doc';

const jsonData = {
  "result": [
    {
      "name": "首页",
      "path": "/",
      "icon": "home",
      "children": null
    },
    {
      "name": "角色管理",
      "path": null,
      "icon": "star",
      "children": [
        {
          "name": "角色列表",
          "path": "/role",
          "icon": null,
          "children": null
        }
      ]
    }
  ],
  "error_info": null,
  "is_success": true
};

const Api = {
  'POST /platform/menu/list': (req, res) => {
    res.end(JSON.stringify(jsonData));
  },
};

export default delay(Api, 200);
