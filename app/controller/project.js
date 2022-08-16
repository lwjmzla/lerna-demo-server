'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = [
      {
        name: 'Vue3-ts模板',
        npmName: 'lwj-vue3',
        version: '1.0.0',
      },
      {
        name: 'Vue3 UI 组件库',
        npmName: 'lwj-ui',
        version: '1.0.0',
      },
    ];
  }
}

module.exports = ProjectController;
