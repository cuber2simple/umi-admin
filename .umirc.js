
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        loading: true,
      },
      dynamicImport: true,
      title: 'umi',
      dll: true,
      pwa: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  proxy: {
    "/api": {
      "target": "http://localhost:8002",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    },
    "/backend": {
      "target": "http://localhost:8080",
      "changeOrigin": true,
      "pathRewrite": { "^/backend" : "" }
    }
  },
}
