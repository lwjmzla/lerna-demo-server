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
        tag: [ 'project' ],
      },
      {
        name: 'Vue3-ts模板1',
        npmName: 'lwj-vue3',
        version: 'latest',
        type: 'normal',
        tag: [ 'project' ],
      },
      {
        name: 'Vue3 lego 组件库',
        npmName: 'lwj-lego-components',
        version: 'latest',
        type: 'normal',
        tag: [ 'component' ],
      },
      {
        name: 'Vue3 UI 组件库',
        npmName: 'lwj-ui',
        version: 'latest',
        type: 'custom',
        tag: [ 'component' ],
      },
    ];
  }
}

module.exports = ProjectController;
