'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = [
      {
        name: 'Vue3-ts模板',
        npmName: 'lwj-vue3',
        version: 'latest',
        type: 'normal',
      },
      {
        name: 'Vue3 UI 组件库',
        npmName: 'lwj-ui',
        version: 'latest',
        type: 'custom',
      },
    ];
  }
}

module.exports = ProjectController;
